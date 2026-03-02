import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAdminStore = defineStore('admin', () => {
  // 定义一个响应式变量，表示侧边栏是否折叠
  const isCollapse = ref(false)

  // 切换折叠状态的方法
  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value
  }

  // 返回可被组件使用的状态和方法
  return {
    isCollapse,
    toggleCollapse
  }
})