<template>
    <el-form ref="formRef" :model="formData">
        <el-row :gutter="24">
            <template v-for="item in formItemAttr" :key="item.prop">
                <el-col v-bind="item.col">
                    <el-form-item :label="item.label" :prop="item.prop">
                        <component :is="isComp(item.type)" v-model="formData[item.prop]"
                            :placeholder="item.placeholder">
                            <el-option label="全部" value=""></el-option>
                            <el-option v-for="opt in item.options" :key="opt.value" :label="opt.label"
                                :value="opt.value" />
                        </component>
                    </el-form-item>
                </el-col>
            </template>
        </el-row>
        <el-row>
            <el-button type="primary" @click="handleSearch">查询</el-button>
            <el-button @click="handleReset(formRef)">重置</el-button>
        </el-row>
    </el-form>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const formRef = ref()

const formData = reactive({})
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
const emit = defineEmits(['search'])

const formItemAttr = computed(() => {
    const { formItem } = props;
    formItem.forEach(item => {
        item.col = {
            xs: 24,
            sm: 12,
            md: 8,
            lg: 6,
            xl: 6
        };
    });
    return formItem;
});

const handleSearch = () => {
    emit('search', formData)
}
const handleReset = (item) => {
    //先重置，再查询
   if(!item) return
   item.resetFields()
   emit('search', formData)
}
</script>
