<template>
  <div>
    <el-row :gutter="50" style="width: 100%;">
      <el-col :span="12">
        <el-input
          class="md-text"
          type="textarea"
          :autosize="{ minRows: 30}"
          placeholder="Please input"
          v-model="content">
        </el-input>
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
