<template>
  <div>
    <el-row type="flex" justify="center">
      <div class="tag-regist">
        タグ登録
        <el-form label-position="left" :inline="true" :model="form" ref="form" :rules="rules">
          <el-form-item label="タグ名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="ソートキー" prop="sort_key">
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
              <el-input v-model="scope.row.sort_key" @input="validate(scope.$index, scope.row.sort_key)"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="アクション">
            <template v-slot="scope">
              <el-button type="primary" @click="updateTag(scope.row)">更新</el-button>
              <el-button type="danger" @click="deleteTag(scope.row)">削除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-row>
  </div>
</template>

<script>
import tagService from '../../services/tagService'

export default {
  props: {
    isNumber: [
      {type: 'number', message: 'please input number', trigger: 'change'}
    ],
  },
  components: {
  },
  data() {
    return {
      rules: {
        sort_key: [
          {
            pattern: /^(0|[1-9]|[1-9][0-9]+)$/, 
            trigger: 'change',
            message: `整数値以外は受け付けません`
          }
        ]
      },
      form: {
        name: '',
        sort_key: ''
        },
      tags: [],
    };
  },
  methods: {
    createTag() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          return
        } else {
          this.$confirm('本当に登録しますか？', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(() => {
            this.createTagService();
          }).catch(() => {
          })
        }
      });
    },
    async createTagService() {
      await tagService.createTag(this.form.name, this.form.sort_key);
      this.form.name = ''
      this.form.sort_key = ''
      this.tags = await tagService.getTagList(); 
    },
    updateTag(tag) {
      this.$confirm('本当に更新しますか？', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.updateTagService(tag);
      }).catch(() => {
      })
    },
    async updateTagService(tag) {
      await tagService.updateTag(tag.id, tag.name, tag.sort_key);
      this.tags = await tagService.getTagList();
    },
    deleteTag(tag) {
      this.$confirm('本当に削除しますか？', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.deleteTagService(tag);
      }).catch(() => {
      })
    },
    async deleteTagService(tag){
      await tagService.deleteTag(tag.id);
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

