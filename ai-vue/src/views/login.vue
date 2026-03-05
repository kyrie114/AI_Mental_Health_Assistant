<template>
  <div class="container">
    <div class="title">
      <div class="back-home">
        <el-icon><Back /></el-icon>
        <span>返回首页</span>
      </div>
      <div class="title-text">
        <h2>登录您的账户</h2>
        <p>请输入您的登录信息</p>
      </div>
    </div>

    <div class="form-container">
      <!-- 表单内容将放在这里 -->
       <el-form
       ref = "ruleFormRef"
       :model="formData"
       :rules="rules"
       label-position="top"
       >
       <el-form-item label="用户名" prop="username">
        <el-input v-model="formData.username" placeholder="请输入用户名" />
       </el-form-item>
       <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" placeholder="请输入密码" type="password" />
       </el-form-item>
       <el-button class="btn" size="large" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
       </el-form>
       <div class ='footer'>
        <p>还没有账号？<router-link to="/auth/register">去注册</router-link></p>
       </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const ruleFormRef = ref()
const formData = reactive({
  username: '',
  password: ''
})
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('表单验证通过')
      console.log(fields)
    } else {
      console.log('表单验证不通过')
    }
  })
}
</script>

<style scoped lang="scss">
.container {
  width: 384px;
  padding: 20px;

  .title {
    margin-bottom: 40px;

    .back-home {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 40px;
      cursor: pointer;
      color: #666;
    }

    .title-text {
      text-align: center;

      h2 {
        font-size: 28px;
        margin-bottom: 10px;
        color: #333;
      }

      p {
        font-size: 14px;
        color: #999;
      }
    }
  }

  .form-container {
    .btn {
      margin-top: 20px;
      width: 100%;
    }

    .footer {
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
      color: #666;

      a {
        color: #409eff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
