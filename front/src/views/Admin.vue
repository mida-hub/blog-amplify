<template>
  <div>
    <el-row>
      <Menu/>
    </el-row>
    <el-row>
      <PostView/>
    </el-row>
  </div>
</template>

<script>
import Menu from '@/components/admin/Menu'
import PostView from '@/components/admin/PostView'

export default {
  components: {
    Menu,
    PostView
  },
}
</script>
