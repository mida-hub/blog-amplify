<template>
  <div class="post-editor">
    <el-row :gutter="50" style="width: 100%;">
      <el-col>
        <el-form label-position="left" ref="form" :model="form" label-width="120px">
          <el-form-item label="タイトル">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="Permanent Link">
            <el-input v-model="form.link"></el-input>
          </el-form-item>
          <el-form-item label="タグ">
            <el-select v-model="post_tags" multiple placeholder="Select">
              <el-option
                v-for="item in selectOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公開予定日時">
              <el-date-picker type="datetime" placeholder="publish at" v-model="form.publish_at"></el-date-picker>
          </el-form-item>
          <el-form-item label="公開フラグ">
            <el-switch v-model="form.is_publish"></el-switch>
          </el-form-item>
          <el-form-item label="概要">
            <el-input type="textarea" :rows="5" v-model="form.abstract"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row :gutter="50" style="width: 100%;">
      <el-col :span="12">
        <textarea
          class="md-text el-textarea el-textarea__inner"
          placeholder="Please input"
          rows=30
          ref="inputContent"
          v-model="content"
          @drop.prevent="handleDrop" 
        ></textarea>
      </el-col>
      <el-col :span="12">
        <markdown-it-vue 
          class="md-body" 
          :content="content" 
          :options="options" 
          @render-complete=hdlCmplete 
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        新規か更新かで出し分ける
        <el-button type="primary" @click="onSubmit">登録</el-button>
        <el-button type="primary" @click="onSubmit">更新</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import axios from 'axios'

export default {
  components: {
    MarkdownItVue
  },
  data () {
    return {
      content: '# your markdown content\n ## test \n ```Python \n print(1) \n ```',
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          attrs: {
            target: '_self',
            rel: 'noopener'
          }
        }
      },
      selectOptions: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      post_tags: [],
      form: {
        title: '',
        link: '',
        tags: [],
        publish_at: '',
        is_publish: false,
        abstract: ''
      },
      image_upload_path: 'http://localhost:8888/images'
    }
  },
  methods: {
    hdlCmplete() {
      console.log('render complete')
    },
    onSubmit() {
      console.log('submit!');
    },
    // ファイルがドロップされたときだけ処理する
    handleDrop: function(e) {
      var files = e.dataTransfer.files
      if (!files.length) {
        return;
      }
      if (!files[0].type.match('image.*')) {
        return;
      }
      var formData = new FormData()
      formData.append('file', files[0]);
      this.postImage(formData);
    },
    postImage: function(formData) {
      let config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      axios
        .post(this.image_upload_path, formData, config)
        .then(response => {
          var textarea = this.$refs.inputContent;
          var sentence = textarea.value;
          var len = sentence.length;
          var pos = textarea.selectionStart;
          var before = sentence.substr(0, pos);
          var after = sentence.substr(pos, len);
          // ToDo: responseでurlを受け取るようにするか動的に取得するようにする
          var word = '![image](/IMG_6572.jpg)'
          sentence = before + word + after
          this.content = sentence;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error)
        })
    },
  }
}
</script>

<style scoped>
  .post-editor {
    margin-top: 10px;
    margin-left: 10px;
  }

  .el-row {
    margin-top: 10px;
  }
</style>
