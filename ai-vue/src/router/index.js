import { createRouter, createWebHistory } from 'vue-router'
import BackLayout from '@/components/BackLayout.vue'//@需要定义路由组件的路径在vite.config.js中配置alias别名

// 路由配置（嵌套路由）
const BackEedRouter = [
  {
    path: '/back',
    component: BackLayout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),//历史模式
  routes: BackEedRouter
})

//导出路由实例
export default router
