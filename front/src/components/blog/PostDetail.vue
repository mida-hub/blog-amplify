<template>
  <div>
    <el-row>
      <el-col>
        投稿日時
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        Title
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        タグ
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <markdown-it-vue 
          class="md-body" 
          :content="content" 
          :options="options" 
          @render-complete=hdlCmplete 
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

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
      }
    }
  },
  methods: {
    hdlCmplete() {
      console.log('render complete')
    }
  }
}
</script>
