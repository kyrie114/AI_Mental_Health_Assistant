# Element Plus 学习笔记

## 概述
Element Plus 是一套为开发者、设计师和产品经理准备的基于 Vue 3 的组件库，提供了丰富的UI组件和交互效果。

## 安装和引入

### 1. 安装
```bash
npm install element-plus
```

### 2. 完整引入
```javascript
// main.js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

### 3. 按需引入
```bash
npm install -D unplugin-vue-components unplugin-auto-import
```

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

## 基础组件

### 1. Button 按钮
```vue
<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
  </div>

  <div>
    <el-button plain>朴素按钮</el-button>
    <el-button round>圆角按钮</el-button>
    <el-button circle icon="el-icon-search"></el-button>
  </div>

  <div>
    <el-button disabled>禁用按钮</el-button>
    <el-button loading>加载中</el-button>
  </div>

  <div>
    <el-button size="large">大型按钮</el-button>
    <el-button>默认按钮</el-button>
    <el-button size="small">小型按钮</el-button>
  </div>
</template>
```

### 2. Icon 图标
```vue
<template>
  <div>
    <el-icon :size="20">
      <Edit />
    </el-icon>
    <el-icon color="#409eff">
      <Share />
    </el-icon>
    <el-icon>
      <Delete />
    </el-icon>
  </div>
</template>

<script setup>
import { Edit, Share, Delete } from '@element-plus/icons-vue'
</script>
```

### 3. Layout 布局
```vue
<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="grid-content">span-8</div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">span-8</div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">span-8</div>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content">span-6</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content">span-12</div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content">span-6</div>
    </el-col>
  </el-row>

  <el-row :gutter="20" justify="center">
    <el-col :span="8">
      <div class="grid-content">居中对齐</div>
    </el-col>
  </el-row>

  <el-row :gutter="20" justify="space-between">
    <el-col :span="8">
      <div class="grid-content">两端对齐</div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">两端对齐</div>
    </el-col>
  </el-row>
</template>

<style scoped>
.grid-content {
  background-color: #f9fafc;
  border-radius: 4px;
  min-height: 36px;
  padding: 10px;
  text-align: center;
}
</style>
```

### 4. Container 布局容器
```vue
<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
```

## 表单组件

### 1. Input 输入框
```vue
<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <el-input v-model="input" placeholder="禁用状态" disabled></el-input>

    <el-input
      v-model="input"
      placeholder="可清空"
      clearable
    ></el-input>

    <el-input
      v-model="input"
      placeholder="密码框"
      show-password
    ></el-input>

    <el-input
      v-model="input"
      placeholder="带图标"
      prefix-icon="el-icon-search"
    ></el-input>

    <el-input
      v-model="textarea"
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
    ></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
const textarea = ref('')
</script>
```

### 2. Select 选择器
```vue
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>

  <el-select v-model="value" placeholder="可清空" clearable>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>

  <el-select v-model="value" placeholder="禁用" disabled>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' }
]
</script>
```

### 3. Radio 单选框
```vue
<template>
  <el-radio v-model="radio" label="1">选项1</el-radio>
  <el-radio v-model="radio" label="2">选项2</el-radio>

  <el-radio-group v-model="radio">
    <el-radio label="1">选项1</el-radio>
    <el-radio label="2">选项2</el-radio>
    <el-radio label="3">选项3</el-radio>
  </el-radio-group>

  <el-radio-group v-model="radio" disabled>
    <el-radio label="1">禁用选项1</el-radio>
    <el-radio label="2">禁用选项2</el-radio>
  </el-radio-group>
</template>

<script setup>
import { ref } from 'vue'

const radio = ref('1')
</script>
```

### 4. Checkbox 多选框
```vue
<template>
  <el-checkbox v-model="checked">选项</el-checkbox>

  <el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
  </el-checkbox-group>

  <el-checkbox-group v-model="checkList" disabled>
    <el-checkbox label="禁用 A"></el-checkbox>
    <el-checkbox label="禁用 B"></el-checkbox>
  </el-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(true)
const checkList = ref(['选中且禁用', '复选框 A'])
</script>
```

### 5. Form 表单
```vue
<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="活动区域" prop="region">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="活动时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="选择日期"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            v-model="form.date2"
            placeholder="选择时间"
            style="width: 100%"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="即时配送" prop="delivery">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>

    <el-form-item label="活动性质" prop="type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="特殊资源" prop="resource">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="活动形式" prop="desc">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">立即创建</el-button>
      <el-button @click="resetForm(formRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formRef = ref(null)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const rules = {
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请选择活动区域', trigger: 'change' }
  ],
  date1: [
    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
  ],
  date2: [
    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
  ],
  type: [
    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
  ],
  resource: [
    { required: true, message: '请选择活动资源', trigger: 'change' }
  ],
  desc: [
    { required: true, message: '请填写活动形式', trigger: 'blur' }
  ]
}

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
```

## 数据展示组件

### 1. Table 表格
```vue
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>

  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }
])

const handleEdit = (index, row) => {
  console.log(index, row)
}

const handleDelete = (index, row) => {
  console.log(index, row)
}
</script>
```

### 2. Tag 标签
```vue
<template>
  <el-tag>标签一</el-tag>
  <el-tag class="ml-2" type="success">标签二</el-tag>
  <el-tag class="ml-2" type="info">标签三</el-tag>
  <el-tag class="ml-2" type="warning">标签四</el-tag>
  <el-tag class="ml-2" type="danger">标签五</el-tag>

  <el-tag closable @close="handleClose">可关闭标签</el-tag>

  <el-tag
    v-for="tag in tags"
    :key="tag.name"
    closable
    :type="tag.type"
    @close="handleClose(tag)"
  >
    {{ tag.name }}
  </el-tag>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref([
  { name: '标签一', type: '' },
  { name: '标签二', type: 'success' },
  { name: '标签三', type: 'info' },
  { name: '标签四', type: 'warning' },
  { name: '标签五', type: 'danger' }
])

const handleClose = (tag) => {
  tags.value.splice(tags.value.indexOf(tag), 1)
}
</script>
```

### 3. Progress 进度条
```vue
<template>
  <el-progress :percentage="50"></el-progress>
  <el-progress :percentage="100" :stroke-width="15"></el-progress>
  <el-progress :percentage="70" status="success"></el-progress>
  <el-progress :percentage="80" status="warning"></el-progress>
  <el-progress :percentage="60" status="exception"></el-progress>

  <el-progress :percentage="percentage" :color="customColor"></el-progress>
  <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
</template>

<script setup>
import { ref } from 'vue'

const percentage = ref(20)
const customColor = ref('#409eff')

const customColorMethod = (percentage) => {
  if (percentage === 100) return '#67c23a'
  if (percentage > 50) return '#e6a23c'
  return '#f56c6c'
}
</script>
```

## 反馈组件

### 1. Message 消息提示
```vue
<template>
  <el-button @click="open">打开消息提示</el-button>
  <el-button @click="openVn">VNode</el-button>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { h } from 'vue'

const open = () => {
  ElMessage('这是一条消息提示')
}

const openVn = () => {
  ElMessage({
    message: h('p', null, [
      h('span', null, '消息可以是 '),
      h('i', { style: 'color: teal' }, 'VNode')
    ])
  })
}
</script>
```

### 2. MessageBox 弹框
```vue
<template>
  <el-button @click="open">点击打开 Message Box</el-button>
</template>

<script setup>
import { ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.alert('这是一段内容', '标题名称', {
    confirmButtonText: '确定',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`
      })
    }
  })
}
</script>
```

### 3. Notification 通知
```vue
<template>
  <el-button @click="open">打开通知</el-button>
</template>

<script setup>
import { ElNotification } from 'element-plus'

const open = () => {
  ElNotification({
    title: '标题',
    message: '这是一条消息',
    type: 'success'
  })
}
</script>
```

### 4. Dialog 对话框
```vue
<template>
  <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

  <el-dialog
    v-model="dialogVisible"
    title="提示"
    width="30%"
    :before-close="handleClose"
  >
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)

const handleClose = (done) => {
  ElMessageBox.confirm('确认关闭？')
    .then(() => {
      done()
    })
    .catch(() => {})
}
</script>
```

## 导航组件

### 1. Menu 菜单
```vue
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-sub-menu index="2">
      <template #title>我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4">
      <a href="https://www.ele.me" target="_blank">订单管理</a>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
```

### 2. Tabs 标签页
```vue
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
```

### 3. Breadcrumb 面包屑
```vue
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>
```

### 4. Dropdown 下拉菜单
```vue
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      下拉菜单
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>
```

## 其他组件

### 1. Card 卡片
```vue
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>卡片名称</span>
        <el-button class="button" text>操作按钮</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      {{ '列表内容 ' + o }}
    </div>
  </el-card>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
```

### 2. Carousel 走马灯
```vue
<template>
  <el-carousel height="150px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
```

## 主题定制

### 1. SCSS 变量覆盖
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  }
})
```

```scss
// styles/element/index.scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #409eff,
    ),
  )
);
```

### 2. CSS 变量覆盖
```css
:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
  --el-color-error: #f56c6c;
  --el-color-info: #909399;
}
```

## 最佳实践

### 1. 按需引入
- 使用 `unplugin-vue-components` 和 `unplugin-auto-import` 实现按需引入
- 减少打包体积，提高加载速度

### 2. 主题定制
- 使用 SCSS 变量或 CSS 变量进行主题定制
- 保持设计一致性

### 3. 表单验证
- 使用 Element Plus 的表单验证功能
- 自定义验证规则

### 4. 响应式设计
- 使用 Element Plus 的响应式栅格系统
- 适配不同屏幕尺寸

### 5. 国际化
- 使用 Element Plus 的国际化功能
- 支持多语言切换

## 常见问题

### 1. 样式不生效
```javascript
// 确保引入样式
import 'element-plus/dist/index.css'
```

### 2. 图标不显示
```javascript
// 安装图标包
npm install @element-plus/icons-vue

// 按需引入
import { Edit } from '@element-plus/icons-vue'
```

### 3. 按需引入配置
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

## 总结

Element Plus 的主要特性：
1. **丰富的组件**: 提供了 60+ 高质量组件
2. **TypeScript 支持**: 完整的类型定义
3. **自定义主题**: 支持主题定制
4. **国际化**: 内置国际化支持
5. **响应式**: 支持响应式设计
6. **按需引入**: 支持按需引入，减少打包体积

适用场景：
- 企业级后台管理系统
- 需要快速开发的 Web 应用
- 需要统一 UI 设计的项目
- 需要丰富组件库的项目