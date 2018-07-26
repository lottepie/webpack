<template>
  <el-aside style="width: 200px">
    <el-menu default-active="dashboard" router="true">
      <el-menu-item index="dashboard"><i class="iconfont icon-dashboard"></i> {{ $t('menu.dashboard') }}</el-menu-item>
      <el-menu-item index="user"><i class="iconfont icon-user"></i> {{ $t('menu.user_manage') }}</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'LeftMenu',
  data () {
    return {}
  }
}
</script>
