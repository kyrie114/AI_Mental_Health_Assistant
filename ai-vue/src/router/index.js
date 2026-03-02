import { createRouter, createWebHistory } from 'vue-router'
import BackLayout from '@/components/BackLayout.vue'//@需要定义路由组件的路径在vite.config.js中配置alias别名

// 路由配置（嵌套路由）
const backEedRouter = [
  {
    path: '/back',
    component: BackLayout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard.vue'),
        meta: {
          title: '数据分析',
          icon: 'PieChart'
        }
      }
      ,
      {
        path: 'knowledge',
        component: () => import('@/views/knowledge.vue'),
        meta: {
          title: '知识文章',
          icon: 'ChatLineSquare'
        }
      }
      ,
      {
        path: 'consultation',
        component: () => import('@/views/consultation.vue'),
        meta: {
          title: '咨询记录',
          icon: 'Message'
        }
      }
      ,
      {
        path: 'emotional',
        component: () => import('@/views/emotional.vue'),
        meta: {
          title: '情感分析',
          icon: 'User'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),//历史模式
  routes: backEedRouter
})

//导出路由实例
export default router
