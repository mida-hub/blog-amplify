<template>
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
</template>

<script>
  import tagService from '../../services/tagService'

  export default {
    data() {
      return {
        form: {
          name: '',
          sort_key: ''
        },
      }
    },
    methods: {
      async createTag() {
        await tagService.createTag(this.form.name, this.form.sort_key)
        this.form.name = ''
        this.form.sort_key = ''
      }
    }
  }
</script>

<style scoped>
  .tag-regist {
    margin-left: 10px;
  }
</style>
