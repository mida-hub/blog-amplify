<template>
  <div>
    <el-row>
      <Menu/>
    </el-row>
    <el-row>
      <TagEditor/>
    </el-row>
  </div>
</template>

<script>
import Menu from '@/components/admin/Menu'
import TagEditor from '@/components/admin/TagEditor'

export default {
  components: {
    Menu,
    TagEditor
  },
}
</script>
