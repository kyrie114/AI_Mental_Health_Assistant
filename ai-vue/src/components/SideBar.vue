<template>
    <el-aside :width="isCollapse ? '64px' : '264px'" class="sidebar-container">
        <div class="sidebar-content">
            <!-- 侧边栏菜单组件 -->
            <!-- :collapse-transition="false"：禁用折叠动画 -->
            <!-- :collapse="isCollapse"：绑定折叠状态，由admin store控制 -->
            <!-- default-active="2"：默认激活的菜单项索引 -->
            <!-- class="el-menu-vertical-demo"：垂直菜单样式类 -->
            <el-menu 
            :collapse-transition="false"
            :collapse="isCollapse" 
            default-active="2" 
            class="el-menu-vertical-demo">
                <div class="brand">
                    <!-- Logo 图标 -->
                    <el-image style="width: 50px; height: 50px; margin-right: 10px;" :src="iconUrl" alt="logo" />
                    <!-- 信息卡片：仅在侧边栏未折叠时显示 -->
                    <div v-show="!isCollapse" class="info-card">
                        <h1 class="brand-title">心理健康AI助手</h1>
                        <p class="brand-subtitle">管理后台</p>
                    </div>
                </div>

                <el-menu-item @click="selectMenu" v-for="item in router.options.routes[0].children" :key="item.path"
                    :index="item.path">
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
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import { useAdminStore } from '@/stores/admin'

const isCollapse = computed(() => useAdminStore().isCollapse)
const router = useRouter();
const iconUrl = new URL('@/assets/images/机器人.png', import.meta.url).href

const selectMenu = (key) => {
    console.log(key);
    const activeIndex = router.options.routes[0]
    router.push(`${activeIndex.path}/${key.index}`);
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

.brand {
    display: flex;
    align-items: center;
    padding: 20px 15px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 10px;
}

.brand-image {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin-right: 12px;
    object-fit: cover;
}

.info-card {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
}

.brand-title {
    font-size: 16px;
    font-weight: 600;
    color: #303133;
    margin: 0;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.brand-subtitle {
    font-size: 11px;
    color: #909399;
    margin: 0;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.el-menu {
    border-right: none;
    flex: 1;
    overflow-y: auto;
}

.el-menu-vertical-demo {
    height: 100%;
}

/* 折叠状态下的样式 */
:deep(.el-menu--collapse .brand) {
    justify-content: center;
    padding: 15px 0;
}

:deep(.el-menu--collapse .brand-image) {
    margin-right: 0;
}
</style>
