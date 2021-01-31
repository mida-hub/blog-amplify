<template>
  <div>
    <el-row type="flex" justify="center">
      <div class="tag-regist">
        タグ登録
        <el-form label-position="left" :inline="true">
          <el-form-item label="タグ名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="ソートキー">
            <el-input v-model.number="form.sort_key"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="createTag">登録</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-row>
    <el-row type="flex" justify="center">
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
    </el-row>
  </div>
</template>

<script>
import tagService from '../../services/tagService'

export default {
  components: {
  },
  data() {
    return {
      form: {
        name: '',
        sort_key: ''
        },
      tags: [],
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    async createTag() {
      await tagService.createTag(this.form.name, this.form.sort_key)
      this.form.name = ''
      this.form.sort_key = ''
      this.tags = await tagService.getTagList();
    }
  },
  async mounted () {
    this.tags = await tagService.getTagList();
  }
}
</script>

<style scoped>
  .el-row {
    margin-top: 20px;
  }
  .tag-list {
    margin-left: 10px;
  }
  .tag-regist {
    margin-left: 10px;
  }
</style>

