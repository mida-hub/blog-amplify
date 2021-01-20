<template>
  <div>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <h2>Title１２３４５６７８９０Title１２３４５６７８９０</h2>
        <div style="font-size:12px; color: #909399;">投稿日時 [tag1] [tag2]</div>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        概要概要概要概要概要概要概要１２３４５６７８９０１２３４５６７８９０
        概要概要概要概要概要概要概要１２３４５６７８９０１２３４５６７８９０
        概要概要概要概要概要概要概要１２３４５６７８９０１２３４５６７８９０
      </div>
    </el-card>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <h2>Title１２３４５６７８９０Title１２３４５６７８９０</h2>
        <div style="font-size:12px; color: #909399;">投稿日時 [tag1] [tag2]</div>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        概要概要概要概要概要概要概要１２３４５６７８９０１２３４５６７８９０
        概要概要概要概要概要概要概要１２３４５６７８９０１２３４５６７８９０
        概要概要概要概要概要概要概要１２３４５６７８９０１２３４５６７８９０
      </div>
    </el-card>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <h2>Title１２３４５６７８９０Title１２３４５６７８９０</h2>
        <div style="font-size:12px; color: #909399;">投稿日時 [tag1] [tag2]</div>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        概要概要概要概要概要概要概要１２３４５６７８９０１２３４５６７８９０
        概要概要概要概要概要概要概要１２３４５６７８９０１２３４５６７８９０
        概要概要概要概要概要概要概要１２３４５６７８９０１２３４５６７８９０
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .el-card {
    margin-bottom: 20px;
  }
</style>
