<template>
  <div id="app">
      <el-header>
        <Header/>
        <el-divider/>
      </el-header>
      <el-main>
        <router-view/>
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

export default {
  components: {
    Header,
    Footer
  }
}
</script>

