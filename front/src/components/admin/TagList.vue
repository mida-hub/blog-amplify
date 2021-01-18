<template>
  <div  class="tag-list">
    タグ一覧
    <el-table
    :data="tableData"
    stripe
    style="width: 440pt">
      <el-table-column
        label="タグ名"
        width="180">
        <template v-slot="scope">
          <el-input v-model="scope.row.tag_name"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="ソートキー"
        width="180">
        <template v-slot="scope">
          <el-input v-model="scope.row.sort_key"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="アクション">
        <el-button type="primary" @click="onSubmit">更新</el-button>
        <el-button type="danger" @click="onSubmit">削除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
        tableData: [{
          tag_name: 'Python',
          sort_key: '1'
        }, {
          tag_name: '分析',
          sort_key: '2'
        }, {
          tag_name: 'AtCoder',
          sort_key: '3'
        }, {
          tag_name: 'AWS/GCP',
          sort_key: '4'
        }]
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
  .tag-list {
    margin-left: 10px;
  }
</style>
