<template>
<div>
    <el-row style="width: 100%;">
      <el-col>
        <Tag/>
      </el-col>
    </el-row>
    <el-row style="width: 80%;">
      <el-col :offset="3">
        <PostDetail/>
      </el-col>
    </el-row>
</div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import Tag from '@/components/Tag'
import PostDetail from '@/components/PostDetail'

Vue.use(ElementUI, { locale })

export default {
  components: {
    Tag,
    PostDetail
  },
  data () {
    return {
    }
  },
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
