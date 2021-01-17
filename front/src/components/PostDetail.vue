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
import Vue from 'vue'
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

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
