<template>
  <div class="tag-list">
    タグ一覧
    <el-table
    :data="this.tags"
    :default-sort = "{prop: 'sort_key', order: 'ascending'}"
    stripe
    style="width: 440pt">
      <el-table-column
        label="タグ名"
        width="180">
        <template v-slot="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="ソートキー"
        prop="sort_key"
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
import tagService from '../../services/tagService'

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
      }],
      tags: [],
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  async mounted () {
    this.tags = await tagService.getTagList();
  }
}
</script>

<style scoped>
  .tag-list {
    margin-left: 10px;
  }
</style>
