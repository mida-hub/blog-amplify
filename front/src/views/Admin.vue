<template>
  <div>
    <el-row>
      <Menu/>
    </el-row>
    <el-row>
      <TagView/>
    </el-row>
  </div>
</template>

<script>
import Menu from '@/components/admin/Menu'
import TagView from '@/components/admin/TagView'

export default {
  components: {
    Menu,
    TagView
  },
}
</script>
