<template>
    <!-- 这位是后台管理布局 -->
    <div class="backend-layout">
        <el-container class="main-container">
            <!-- 菜单栏 -->
            <SideBar></SideBar>
            <el-container>
                <!-- 导航栏 -->
                <el-header>
                    <NavBar></NavBar>
                </el-header>
                <!-- 主内容区域 -->
                <el-main class = 'main-content'>
                    <router-view class="content-container"></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'


</script>

<style lang="scss" scoped>
.backend-layout {
  height: 100vh; /* 占满整个视口高度 */
  
  .el-header {
    height: 74px !important; /* 强制设置头部高度为 74px，覆盖其他样式 */
  }
  
  .main-container {
    height: 100%; /* 占满剩余空间 */
    
    .content-container {
      padding: 20px;
      background-color: #fff; /* 白色背景 */
      min-height: calc(100% - 74px); /* 内容区域最小高度 = 总高 - 头部高度 */
    }
  }
}
</style>
