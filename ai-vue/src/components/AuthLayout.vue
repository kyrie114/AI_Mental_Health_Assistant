<template>
  <div class="auth-layout">
    <div class="left-section">
      <div class="content">
        <h2 class="title">心理AI助手</h2>
        <p class="text">每个深夜，每个焦虑的时刻，我们都在这里。不必独自承受，让心与心的连接温暖您的每一天</p>
        <div class="robot">
          <el-image 
            style="width: 90px; height: 90px" 
            :src="iconUrl" 
            alt="心理AI助手" 
          />
        </div>
      </div>
    </div>

    <div class="right-section">
      <router-view />
    </div>
  </div>
</template>

<script setup>
const iconUrl = new URL('@/assets/images/robot-fill.png', import.meta.url).href
</script>

<style scoped>
.auth-layout {
  display: flex;
  height: 100vh;
}

.left-section {
  flex: 1;
  background: linear-gradient(135deg, #a8e6cf 0%, #88d8b0 50%, #56ab91 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.content {
  text-align: center;
  color: white;
  max-width: 400px;
}

.title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.text {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.9;
}

.robot {
  display: flex;
  justify-content: center;
}

.right-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
</style>
