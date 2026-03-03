<template>
    <el-form >
     <template v-for="item in formItem" :key="item.prop">
        <el-form-item :label="item.label" >
           <component :is =isComp(item.type) :placeholder="item.placeholder" v-bind="item"/>
        </el-form-item>
     </template>
    </el-form>
</template>

<script setup>
// 接受外面传进来的参数  <TableSearch  :formItem="formItem" @search="handleSearch"/>
const props = defineProps({
    formItem: {
        type: Array,
        default: () => []
    }
})

const isComp = (comp) => {
    return {
        'input': 'el-input',
        'select': 'el-select',
    }[comp]
}
</script>
