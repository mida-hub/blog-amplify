<template>
  <div>
    <el-row type="flex" justify="center">
      <PostList/>
    </el-row>
  </div>
</template>

<script>
import PostList from '@/components/admin/PostList'

export default {
  components: {
    PostList
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style scoped>
  .el-row {
    margin-top: 20px;
  }
</style>

