<template>
  <div>
    <el-row type="flex" justify="center">
      <TagRegist/>
    </el-row>
    <el-row type="flex" justify="center">
      <TagList/>
    </el-row>
  </div>
</template>

<script>
import TagRegist from '@/components/admin/TagRegist'
import TagList from '@/components/admin/TagList'

export default {
  components: {
    TagRegist,
    TagList
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

