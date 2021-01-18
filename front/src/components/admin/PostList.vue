<template>
  <div class="post-list">
    記事一覧
    <el-table
    :data="tableData"
    stripe
    >
      <el-table-column
        label="タイトル"
        prop="title"
        width="300">
      </el-table-column>
      <el-table-column
        label="投稿日時"
        prop="created_at"
        width="180">
      </el-table-column>
      <el-table-column
        label="更新日時"
        prop="created_at"
        width="180">
      </el-table-column>
      <el-table-column
        label="公開予定日時"
        prop="publish_at"
        width="180">
      </el-table-column>
      <el-table-column
        label="公開フラグ"
        prop="is_publish"
        width="100">
      </el-table-column>
      <el-table-column
        label="アクション"
        width="180">
        <el-button type="primary" @click="onSubmit">編集</el-button>
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
          title: 'タイトル1',
          created_at: '2020-12-01 00:00:00',
          updated_at: '2020-12-01 00:00:00',
          publish_at: '2020-12-02 00:00:00',
          is_publish: 'False'
        }, {
          title: 'タイトル2',
          created_at: '2020-12-01 00:00:00',
          updated_at: '2020-12-01 00:00:00',
          publish_at: '2020-12-02 00:00:00',
          is_publish: 'True'
        }, {
          title: 'タイトル3',
          created_at: '2020-12-01 00:00:00',
          updated_at: '2020-12-01 00:00:00',
          publish_at: '2020-12-02 00:00:00',
          is_publish: 'False'
        }, {
          title: 'タイトル4',
          created_at: '2020-12-01 00:00:00',
          updated_at: '2020-12-01 00:00:00',
          publish_at: '2020-12-02 00:00:00',
          is_publish: 'True'
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
  .post-list {
    margin-left: 10px;
  }
</style>
