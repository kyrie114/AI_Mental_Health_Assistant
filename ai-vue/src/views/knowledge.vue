<template>
  <div>
    <PageHand title="知识文章">
      <template #buttons>
        <el-button type="primary">新增</el-button>
        <el-button type="primary">删除</el-button>
      </template>
    </PageHand>
    <!-- 导入数据 -->
    <TableSearch  :formItem="formItem" @search="handleSearch"/>
  </div>
</template>

<script setup>
import PageHand from '@/components/PageHand.vue'
import TableSearch from '@/components/TableSearch.vue'

const formItem = [
  {type:'input',prop:"title",label: '文章标题',placeholder:'请输入文章标题'},
  {type:'select',prop:"categoryId",label: '分类',placeholder:'请选择分类',
   options: [
      { label: '心理健康基础', value: '1' },
      { label: '情绪管理', value: '2' }
    ]
},
]
    
const handleSearch = (formData) => {
    console.log(formData);
}
</script>
