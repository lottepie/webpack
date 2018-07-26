<template>
  <el-header height="60px">
    <img src="@/assets/img/fwdt-logo.svg" alt="element-logo" class="header-logo">
    <language-switch direction="up" trigger="hover" style="float: right; margin-right: 20px"></language-switch>
  </el-header>
</template>

<script>
import LanguageSwitch from '@/components/common/LanguageSwitch'

export default {
  name: 'Header',
  components: {
    LanguageSwitch
  },
  data () {
    return {}
  }
}
</script>
