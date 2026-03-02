# Vue Router 4 学习笔记

## 概述
Vue Router 是 Vue.js 官方的路由管理器，用于构建单页面应用（SPA）。Vue Router 4 是专门为 Vue 3 设计的版本。

## 基础概念

### 1. 安装
```bash
npm install vue-router@4
```

### 2. 基本配置

#### 创建路由实例
```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

#### 在应用中使用路由
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

#### 在模板中使用
```vue
<template>
  <div>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
```

## 路由模式

### 1. HTML5 History 模式
```javascript
import { createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes
})
```

**特点**：
- URL 看起来很正常（如 `/user/123`）
- 需要服务器配置支持
- 适合生产环境

### 2. Hash 模式
```javascript
import { createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
```

**特点**：
- URL 包含 `#`（如 `/#/user/123`）
- 不需要服务器配置
- 适合开发环境或特殊场景

### 3. Memory 模式
```javascript
import { createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes
})
```

**特点**：
- 不改变浏览器 URL
- 适合测试环境或非浏览器环境

## 动态路由匹配

### 1. 基本动态路由
```javascript
const routes = [
  {
    path: '/user/:id',
    component: User
  }
]
```

### 2. 在组件中获取参数
```vue
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
</script>
```

### 3. 多个动态参数
```javascript
const routes = [
  {
    path: '/user/:id/post/:postId',
    component: UserPost
  }
]
```

### 4. 可选参数
```javascript
const routes = [
  {
    path: '/user/:id?',
    component: User
  }
]
```

### 5. 参数验证
```javascript
const routes = [
  {
    path: '/user/:id(\\d+)',
    component: User
  }
]
```

## 嵌套路由

### 1. 基本嵌套
```javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]
```

### 2. 嵌套路由组件
```vue
<!-- User.vue -->
<template>
  <div>
    <h2>用户 {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>
</template>
```

### 3. 项目中的实际应用
```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import BackLayout from '@/components/BackLayout.vue'

const BackEedRouter = [
  {
    path: '/back',
    component: BackLayout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard.vue')
      },
      {
        path: 'users',
        component: () => import('@/views/users.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: BackEedRouter
})

export default router
```

## 路由懒加载

### 1. 基本语法
```javascript
const routes = [
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
]
```

### 2. 命名 chunk
```javascript
const routes = [
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]
```

### 3. 分组 chunk
```javascript
const About = () => import(/* webpackChunkName: "group-about" */ '@/views/About.vue')
const Contact = () => import(/* webpackChunkName: "group-about" */ '@/views/Contact.vue')

const routes = [
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]
```

## 编程式导航

### 1. 使用 router.push()
```javascript
import { useRouter } from 'vue-router'

const router = useRouter()

// 字符串路径
router.push('/users/123')

// 对象
router.push({ path: '/users/123' })

// 命名路由
router.push({ name: 'user', params: { id: 123 } })

// 带查询参数
router.push({ path: '/user', query: { id: 123 } })
```

### 2. 使用 router.replace()
```javascript
// 不在历史记录中留下记录
router.replace('/users/123')
```

### 3. 使用 router.go()
```javascript
// 前进
router.go(1)

// 后退
router.go(-1)

// 前进 3 步
router.go(3)
```

### 4. 在模板中使用
```vue
<template>
  <button @click="$router.push('/about')">关于</button>
  <button @click="$router.back()">返回</button>
</template>
```

## 命名路由

### 1. 定义命名路由
```javascript
const routes = [
  {
    path: '/user/:id',
    name: 'user',
    component: User
  }
]
```

### 2. 使用命名路由
```javascript
router.push({ name: 'user', params: { id: 123 } })
```

### 3. 在模板中使用
```vue
<router-link :to="{ name: 'user', params: { id: 123 } }">用户</router-link>
```

## 命名视图

### 1. 定义命名视图
```javascript
const routes = [
  {
    path: '/',
    components: {
      default: Home,
      sidebar: Sidebar,
      header: Header
    }
  }
]
```

### 2. 在模板中使用
```vue
<template>
  <div>
    <router-view name="header"></router-view>
    <div class="content">
      <router-view></router-view>
      <router-view name="sidebar"></router-view>
    </div>
  </div>
</template>
```

## 重定向和别名

### 1. 重定向
```javascript
const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/user/:id',
    redirect: to => {
      return { path: `/profile/${to.params.id}` }
    }
  }
]
```

### 2. 别名
```javascript
const routes = [
  {
    path: '/',
    component: Home,
    alias: '/home'
  }
]
```

## 路由守卫

### 1. 全局前置守卫
```javascript
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})
```

### 2. 全局后置钩子
```javascript
router.afterEach((to, from) => {
  document.title = to.meta.title || '默认标题'
})
```

### 3. 路由独享守卫
```javascript
const routes = [
  {
    path: '/admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (isAdmin()) {
        next()
      } else {
        next('/login')
      }
    }
  }
]
```

### 4. 组件内守卫
```vue
<script setup>
import { onBeforeRouteEnter, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'

onBeforeRouteEnter((to, from, next) => {
  next(vm => {
    console.log('组件实例:', vm)
  })
})

onBeforeRouteUpdate((to, from, next) => {
  next()
})

onBeforeRouteLeave((to, from, next) => {
  if (hasUnsavedChanges()) {
    const answer = window.confirm('确定要离开吗？未保存的更改将丢失。')
    if (answer) {
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})
</script>
```

## 路由元信息

### 1. 定义元信息
```javascript
const routes = [
  {
    path: '/admin',
    component: Admin,
    meta: {
      requiresAuth: true,
      title: '管理后台',
      roles: ['admin']
    }
  }
]
```

### 2. 使用元信息
```javascript
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})
```

### 3. 在组件中访问
```vue
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const title = route.meta.title
</script>
```

## 过渡效果

### 1. 基本过渡
```vue
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

### 2. 滑动过渡
```vue
<template>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
```

## 组合式 API

### 1. useRoute()
```javascript
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.path)
console.log(route.params)
console.log(route.query)
console.log(route.meta)
```

### 2. useRouter()
```javascript
import { useRouter } from 'vue-router'

const router = useRouter()

router.push('/about')
router.back()
```

## 最佳实践

### 1. 路由组织
```javascript
// routes/index.js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home.vue')
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'AdminDashboard',
          component: () => import('@/views/admin/Dashboard.vue')
        }
      ]
    }
  ]
})

export default router
```

### 2. 路由懒加载
- 所有路由组件都应该使用懒加载
- 合理分组 chunk 以优化加载性能

### 3. 权限控制
```javascript
router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await checkAuth()
  const requiredRoles = to.meta.roles

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (requiredRoles && !hasRole(requiredRoles)) {
    next('/403')
  } else {
    next()
  }
})
```

### 4. 错误处理
```javascript
const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]
```

## 常见问题

### 1. 路由参数丢失
```javascript
// 错误
router.push({ path: '/user', params: { id: 123 } })

// 正确
router.push({ name: 'user', params: { id: 123 } })
```

### 2. 相同路由跳转
```javascript
// 避免重复跳转
router.push(to).catch(err => {
  if (err.name !== 'NavigationDuplicated') {
    throw err
  }
})
```

### 3. 获取当前路由
```javascript
// 在组件外
import router from './router'
console.log(router.currentRoute.value)

// 在组件内
import { useRoute } from 'vue-router'
const route = useRoute()
```

## 总结

Vue Router 4 的主要特性：
1. **完全重写**: 专为 Vue 3 设计
2. **更好的 TypeScript 支持**: 完整的类型定义
3. **Composition API**: 与 Vue 3 的组合式 API 完美集成
4. **更小的包体积**: 更好的 Tree-shaking
5. **更灵活的导航**: 支持更多导航方式

适用场景：
- 单页面应用（SPA）
- 需要复杂路由管理的应用
- 需要权限控制的应用
- 需要动态路由的应用