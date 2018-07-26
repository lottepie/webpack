<template>
  <div>
    <footer class="main-footer fixed">
      <el-row class="footer-container">
        <LanguageSwitch direction="up" trigger="click" style="float: right;margin-right: 20px"></LanguageSwitch>
        <p class="copyright" v-html="$t('label.copyright')"></p>
      </el-row>
      <div >
      </div>
    </footer>
  </div>
</template>

<script>
import LanguageSwitch from '../common/LanguageSwitch'

export default {
  components: {
    LanguageSwitch
  },
  data () {
    return {
      versionChangeVisible: false
    }
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/style.styl'
  .copyright {
    height: 48px;
    line-height: 48px;
    text-align: right;
    float: right;
    margin-right: 20px;
  }

  .main-footer.fixed {
    position: fixed;
    left: 300px;
    right: 0;
    bottom: 0;
    height: 48px;
    vertical-align: middle;
    border-top: none;
    box-shadow: 0 -1px 1px rgba(0,0,0,0.1);
    background-color: $color-01;
    z-index: 100;
  }

  .lang_switch {
    float: right;
    height: 48px;
    width: 36px;
  }
</style>
