# Vue 3 Composition API 学习笔记

## 概述
Vue 3引入了Composition API，提供了一种更灵活、更强大的组件逻辑组织方式。

## 核心概念

### 1. `<script setup>` 语法糖
`<script setup>` 是Vue 3.2+引入的编译时语法糖，大大简化了组合式API的使用。

#### 基本语法
```vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>

<template>
  <div>{{ count }} x 2 = {{ doubled }}</div>
  <button @click="increment">增加</button>
</template>
```

#### 优势
- 更少的样板代码
- 更好的TypeScript支持
- 运行时性能更好
- IDE支持更好

### 2. 响应式API

#### ref()
用于创建响应式引用，适用于基本类型和对象。

```javascript
import { ref } from 'vue'

const count = ref(0)
const user = ref({ name: 'John', age: 25 })

// 访问值
console.log(count.value)
console.log(user.value.name)

// 修改值
count.value = 1
user.value.name = 'Jane'
```

#### reactive()
用于创建响应式对象，适用于复杂对象。

```javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  user: {
    name: 'John',
    age: 25
  }
})

// 访问和修改
state.count++
state.user.name = 'Jane'
```

#### computed()
创建计算属性，基于其他响应式数据计算值。

```javascript
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

// 可写的计算属性
const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  set(value) {
    [firstName.value, lastName.value] = value.split(' ')
  }
})
```

#### watch() 和 watchEffect()
监听响应式数据的变化。

```javascript
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)

// watch - 明确指定监听源
watch(count, (newValue, oldValue) => {
  console.log(`count从 ${oldValue} 变为 ${newValue}`)
})

// watchEffect - 自动追踪依赖
watchEffect(() => {
  console.log(`当前count值为: ${count.value}`)
})

// 监听多个源
watch([count, anotherRef], ([newCount, newAnother], [oldCount, oldAnother]) => {
  console.log('多个值变化了')
})
```

### 3. 生命周期钩子
在 `<script setup>` 中，生命周期钩子需要显式导入。

```javascript
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('组件已挂载')
})

onUpdated(() => {
  console.log('组件已更新')
})

onUnmounted(() => {
  console.log('组件已卸载')
})
```

#### 生命周期对比
| Options API | Composition API |
|-------------|-----------------|
| beforeCreate | setup() |
| created | setup() |
| beforeMount | onBeforeMount |
| mounted | onMounted |
| beforeUpdate | onBeforeUpdate |
| updated | onUpdated |
| beforeUnmount | onBeforeUnmount |
| unmounted | onUnmounted |

### 4. 组件通信

#### Props
```vue
<!-- 父组件 -->
<script setup>
import ChildComponent from './ChildComponent.vue'

const message = ref('Hello from parent')
</script>

<template>
  <ChildComponent :message="message" />
</template>

<!-- 子组件 ChildComponent.vue -->
<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true
  }
})

console.log(props.message)
</script>
```

#### Emits
```vue
<!-- 子组件 -->
<script setup>
const emit = defineEmits(['update', 'delete'])

function handleClick() {
  emit('update', { id: 1, value: 'new value' })
}
</script>

<template>
  <button @click="handleClick">点击发送事件</button>
</template>

<!-- 父组件 -->
<script setup>
import ChildComponent from './ChildComponent.vue'

function handleUpdate(data) {
  console.log('收到更新:', data)
}
</script>

<template>
  <ChildComponent @update="handleUpdate" />
</template>
```

#### v-model
```vue
<!-- 子组件 -->
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function updateValue(newValue) {
  emit('update:modelValue', newValue)
}
</script>

<template>
  <input
    :value="props.modelValue"
    @input="updateValue($event.target.value)"
  />
</template>

<!-- 父组件 -->
<script setup>
import ChildComponent from './ChildComponent.vue'

const text = ref('hello')
</script>

<template>
  <ChildComponent v-model="text" />
</template>
```

### 5. 依赖注入
使用 provide 和 inject 实现跨层级组件通信。

```javascript
// 父组件
import { provide, ref } from 'vue'

const theme = ref('dark')

provide('theme', theme)

// 子组件
import { inject } from 'vue'

const theme = inject('theme')
```

### 6. 模板引用
使用 ref 获取DOM元素或组件实例。

```vue
<script setup>
import { ref, onMounted } from 'vue'

const inputRef = ref(null)

onMounted(() => {
  inputRef.value.focus()
})

function focusInput() {
  inputRef.value.focus()
}
</script>

<template>
  <input ref="inputRef" type="text" />
  <button @click="focusInput">聚焦输入框</button>
</template>
```

### 7. 组合式函数
将可复用的逻辑提取到独立的函数中。

```javascript
// useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const doubled = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = initialValue
  }

  return {
    count,
    doubled,
    increment,
    decrement,
    reset
  }
}

// 在组件中使用
<script setup>
import { useCounter } from './useCounter'

const { count, doubled, increment, decrement, reset } = useCounter(10)
</script>

<template>
  <div>计数: {{ count }}</div>
  <div>双倍: {{ doubled }}</div>
  <button @click="increment">增加</button>
  <button @click="decrement">减少</button>
  <button @click="reset">重置</button>
</template>
```

## 最佳实践

### 1. 响应式数据选择
- 使用 `ref()` 处理基本类型和需要替换整个对象的情况
- 使用 `reactive()` 处理复杂对象的属性修改

### 2. 计算属性 vs 方法
- 使用 `computed()` 当需要缓存结果时
- 使用方法当每次调用都需要重新计算时

### 3. 避免响应式丢失
```javascript
// 错误：会丢失响应性
const state = reactive({ count: 0 })
let { count } = state
count++ // 不会触发更新

// 正确：使用 toRefs
import { toRefs } from 'vue'
const state = reactive({ count: 0 })
const { count } = toRefs(state)
count.value++ // 会触发更新
```

### 4. 组件命名
- 组件文件使用 PascalCase 命名
- 组件标签在模板中使用 kebab-case 或 PascalCase

### 5. Props 验证
```javascript
const props = defineProps({
  propA: Number,
  propB: [String, Number],
  propC: {
    type: String,
    required: true
  },
  propD: {
    type: Number,
    default: 100
  },
  propE: {
    type: Object,
    default: () => ({ message: 'hello' })
  },
  propF: {
    validator: (value) => {
      return ['success', 'warning', 'danger'].includes(value)
    }
  }
})
```

## 与 Options API 对比

### Options API
```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    doubled() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log('组件已挂载')
  }
}
</script>
```

### Composition API
```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

function increment() {
  count.value++
}

onMounted(() => {
  console.log('组件已挂载')
})
</script>
```

## 总结

Composition API 的优势：
1. **更好的逻辑组织**: 相关的逻辑可以组织在一起
2. **更好的类型推断**: TypeScript 支持更好
3. **更灵活的代码复用**: 通过组合式函数实现
4. **更小的包体积**: Tree-shaking 更友好

适用场景：
- 大型复杂组件
- 需要复用逻辑的场景
- TypeScript 项目
- 需要更好的代码组织的项目