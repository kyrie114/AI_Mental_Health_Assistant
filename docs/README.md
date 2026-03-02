# AI心理健康助手项目学习笔记

## 笔记目录

### 1. [项目笔记](./项目笔记.md)
- 项目概述
- 技术栈介绍
- 项目结构说明
- 核心知识点总结
- 关键配置详解
- 组件结构分析
- 样式处理方式
- 开发命令说明
- 项目特点总结
- 技术要点总结
- 扩展建议

### 2. [Vue 3 Composition API](./Vue3-Composition-API.md)
- Composition API 概述
- `<script setup>` 语法糖
- 响应式API（ref、reactive、computed、watch）
- 生命周期钩子
- 组件通信（Props、Emits、v-model）
- 依赖注入
- 模板引用
- 组合式函数
- 最佳实践
- 与 Options API 对比

### 3. [Vue Router 4](./Vue-Router-4.md)
- Vue Router 4 概述
- 基本配置和使用
- 路由模式（History、Hash、Memory）
- 动态路由匹配
- 嵌套路由
- 路由懒加载
- 编程式导航
- 命名路由和命名视图
- 重定向和别名
- 路由守卫
- 路由元信息
- 过渡效果
- 组合式 API
- 最佳实践
- 常见问题

### 4. [Element Plus](./Element-Plus.md)
- Element Plus 概述
- 安装和引入（完整引入、按需引入）
- 基础组件（Button、Icon、Layout、Container）
- 表单组件（Input、Select、Radio、Checkbox、Form）
- 数据展示组件（Table、Tag、Progress）
- 反馈组件（Message、MessageBox、Notification、Dialog）
- 导航组件（Menu、Tabs、Breadcrumb、Dropdown）
- 其他组件（Card、Carousel）
- 主题定制
- 最佳实践
- 常见问题

## 项目技术栈

### 核心框架
- **Vue 3.5.25**: 使用Vue 3组合式API（Composition API）
- **Vue Router 4.6.4**: 路由管理
- **Element Plus 2.13.3**: UI组件库

### 构建工具
- **Vite 7.3.1**: 现代化的前端构建工具
- **@vitejs/plugin-vue 6.0.2**: Vite的Vue插件

### 样式处理
- **Sass 1.97.3**: CSS预处理器（sass-embedded）

## 学习路径建议

### 初学者
1. 先阅读 [项目笔记](./项目笔记.md) 了解项目整体结构
2. 学习 [Vue 3 Composition API](./Vue3-Composition-API.md) 的基础知识
3. 学习 [Element Plus](./Element-Plus.md) 的基础组件使用
4. 学习 [Vue Router 4](./Vue-Router-4.md) 的路由配置

### 进阶学习
1. 深入学习 Vue 3 的响应式原理和组合式函数
2. 掌握 Vue Router 的高级特性（路由守卫、动态路由等）
3. 学习 Element Plus 的主题定制和按需引入
4. 实践项目中的实际应用场景

### 实战项目
1. 参考项目笔记中的项目结构
2. 使用 Vue 3 Composition API 开发组件
3. 使用 Vue Router 4 配置路由
4. 使用 Element Plus 构建UI界面
5. 实现完整的后台管理系统

## 常用命令

### 开发命令
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

### Git 命令
```bash
# 初始化仓库
git init

# 添加文件
git add .

# 提交更改
git commit -m "提交信息"

# 推送到远程仓库
git push -u origin main
```

## 项目特点

1. **模块化设计**: 组件化开发，职责分离
2. **路由嵌套**: 支持多层路由结构
3. **懒加载**: 路由组件按需加载，优化性能
4. **路径别名**: 使用 `@` 简化路径引用
5. **响应式布局**: 基于Element Plus的响应式组件

## 扩展建议

1. **状态管理**: 考虑引入Pinia进行全局状态管理
2. **API封装**: 统一管理API请求
3. **权限控制**: 实现路由守卫和权限验证
4. **主题定制**: 基于SCSS变量实现主题切换
5. **性能优化**: 组件懒加载、代码分割等

## 相关资源

### 官方文档
- [Vue 3 官方文档](https://cn.vuejs.org/)
- [Vue Router 官方文档](https://router.vuejs.org/zh/)
- [Element Plus 官方文档](https://element-plus.org/zh-CN/)
- [Vite 官方文档](https://cn.vitejs.dev/)

### 学习资源
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)
- [Element Plus 示例](https://element-plus.org/zh-CN/component/overview.html)

## 更新日志

### 2026-03-01
- 创建项目学习笔记
- 完成 Vue 3 Composition API 笔记
- 完成 Vue Router 4 笔记
- 完成 Element Plus 笔记

## 贡献指南

欢迎对本笔记提出建议和改进意见，可以通过以下方式：
- 提交 Issue
- 提交 Pull Request
- 直接联系作者

## 许可证

本项目笔记仅供学习参考使用。