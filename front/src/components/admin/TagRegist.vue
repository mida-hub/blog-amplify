<template>
  <div class="tag-regist">
    タグ登録
    <el-form label-position="left" :inline="true">
      <el-form-item label="タグ名">
        <el-input v-model="form.tag_name"></el-input>
      </el-form-item>
      <el-form-item label="ソートキー">
        <el-input v-model="form.sort_key"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登録</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          tag_name: '',
          sort_key: ''
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  .tag-regist {
    margin-left: 10px;
  }
</style>
