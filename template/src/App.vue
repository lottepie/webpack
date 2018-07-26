<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$Progress.finish()
  },
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
</script>
