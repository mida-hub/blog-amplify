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
import Tag from '@/components/Tag'
import PostDetail from '@/components/PostDetail'

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
