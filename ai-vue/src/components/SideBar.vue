<template>
    <el-aside width="264px" class="sidebar-container">
        <div class="sidebar-content">
            <div class="brand-item">
                <el-image :src="iconUrl" alt="AI心理健康助手" class="brand-image">
                </el-image>
                <div class="brand">
                    <div class="info-card">
                        <h1 class="brand-title">AI心理健康助手</h1>
                        <p class="brand-subtitle">后台管理系统</p>
                    </div>
                </div>
            </div>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-menu-item v-for="item in router.options.routes[0].children" :key="item.path" :index="item.path">
                    <el-icon>
                        <component :is="item.meta.icon" />
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </el-menu-item>
            </el-menu>
        </div>
    </el-aside>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const iconUrl = new URL('@/assets/images/机器人.png', import.meta.url).href


const handleOpen = () => {

}

const handleClose = () => {

}
</script>

<style scoped>
.sidebar-container {
    height: 100vh;
    background-color: #ffffff;
    overflow: hidden;
}

.sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.brand-item {
    display: flex;
    align-items: center;
    padding: 20px 15px;
    border-bottom: 1px solid #eaeaea;
}

.brand-image {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-right: 15px;
    object-fit: cover;
}

.brand {
    flex: 1;
}

.info-card {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.brand-title {
    font-size: 18px;
    font-weight: 600;
    color: #303133;
    margin: 0;
    line-height: 1.2;
}

.brand-subtitle {
    font-size: 12px;
    color: #909399;
    margin: 0;
    line-height: 1.2;
}

.el-menu {
    border-right: none;
    flex: 1;
    overflow-y: auto;
}

.el-menu-vertical-demo {
    height: 100%;
}
</style>
