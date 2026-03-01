<template>
    <!-- 这位是后台管理布局 -->
    <div class="backend-layout">
        <el-container>
            <!-- 菜单栏 -->
            <SideBar></SideBar>
            <el-container>
                <!-- 导航栏 -->
                <el-header>
                    <NavBar></NavBar>
                </el-header>
                <!-- 主内容区域 -->
                <el-main>
                    <router-view></router-view>
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
    height: 100vh;
}
</style>
