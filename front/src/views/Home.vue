<template>
<div>
  <el-header>
    <Header/>
    <el-divider/>
  </el-header>
  <el-main>
    <el-row style="width: 100%;">
      <el-col>
        <Tag/>
      </el-col>
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
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Tag from '@/components/Tag'
import PostDetail from '@/components/PostDetail'

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
