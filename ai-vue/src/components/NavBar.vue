<template>
    <div class='navbar'>
        <div class="flex-box">
            <el-button @click="handleCollapse">
                <el-icon>
                    <Expand />
                </el-icon>
                
            </el-button>
            <p class="page-title">导航栏</p>
        </div>
        <div class="flex-box">
            <el-dropdown @command="handleCommand">
                <div class="flex-box">
                   <el-avatar :src="iconUrl" alt="用户头像" >
                   
                   </el-avatar>
                    <p class="user-name">admin</p>
                    <el-icon>
                        <ArrowDown />
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

</template>
<script setup>

const iconUrl = new URL('@/assets/images/users.png', import.meta.url).href

const handleCommand = (command) => {
    console.log(command);
    if (command === 'logout') {
        console.log('退出登录');
    }
}

import { useAdminStore } from '@/stores/admin'
const handleCollapse = () => {
    useAdminStore().toggleCollapse()
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background: white;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    border-bottom: 1px solid #e5e7eb;

    .flex-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .page-title {
        margin-left: 20px;
        font-size: 26px;
        font-weight: bold;
        color: #1f2937;
    }
}
</style>
