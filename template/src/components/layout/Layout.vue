<template>
  <el-container class="wrapper is-vertical">
    <v-header></v-header>
    <el-container>
      <v-left-menu></v-left-menu>
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import vHeader from '../module/Header'
import vLeftMenu from '../module/LeftMenu'

export default {
  components: {
    vHeader,
    vLeftMenu
  },
  methods: {
  }
}
</script>
