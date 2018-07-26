<template>
  <div id="dashboard" ref="dashboard">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }"><i class="iconfont icon-home"></i> {{ $t('title.home') }}</el-breadcrumb-item>
      <el-breadcrumb-item><i class="iconfont icon-dashboard"></i> {{ $t('title.dashboard') }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {}
  },
  methods: {}
}
</script>
