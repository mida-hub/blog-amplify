<template>
  <div>
    <el-header>
      <Header/>
      <el-divider/>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <Tag/>
      </el-row>
      <el-row style="width: 80%;">
        <el-col :offset="3">
          <PostDetail/>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-divider/>
      <Footer/>
    </el-footer>
  </div>
</template>

<script>
import Header from '@/components/blog/Header'
import Footer from '@/components/blog/Footer'
import Tag from '@/components/blog/Tag'
import PostDetail from '@/components/blog/PostDetail'

export default {
  components: {
    Header,
    Footer,
    Tag,
    PostDetail
  },
  data () {
    return {
    }
  },
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
