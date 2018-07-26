<template>
  <section class="languages-switch" style="cursor: pointer;">
    <el-dropdown v-model="locale" :trigger="trigger" @command="setLocale">
      <span class="el-dropdown-link">
        <i :class="'flag-' + locale"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="lang-menu pc-menu" style="margin-right: -5px;min-width: 36px">
        <template v-for="(item, index) in localeOptions">
          <el-dropdown-item :key="index" :command="item.value" style="padding: 0 10px;"><i :class="'flag-' + item.value"></i></el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
  </section>
</template>
<script>
import Locale from '../../../utils/locale'

export default {
  name: 'LanguageSwitch',
  props: {
    direction: {
      type: String,
      default: 'up'
    },
    trigger: {
      type: String,
      default: 'hover'
    }
  },
  data () {
    return {
      localeOptions: [{'key': '简体中文', value: 'zh-CN'}, {'key': '日本語', value: 'ja-JP'}, {'key': 'English', value: 'en-US'}],
      locale: Locale.get(),
      prevLocale: ''
    }
  },
  methods: {
    setLocale (locale) {
      this.prevLocale = this.locale
      this.$i18n.locale = locale
      Locale.set(locale)
      this.locale = locale
      this.$emit('on-change', this.prevLocale, this.locale)
    }
  },
  computed: {
    placement () {
      return this.direction === 'up' ? 'top' : 'bottom'
    }
  },
  watch: {
    locale () {
      this.$i18n.locale = this.locale
      Locale.set(this.locale)
      this.$emit('on-change', this.prevLocale, this.locale)
    }
  },
  created () {
    this.$i18n.locale = this.locale
  }
}
</script>

<style scoped>
  .flag {
    background-size: contain;
    -moz-background-size: contain;
    -webkit-background-size: contain;
    -o-background-size: contain;
    background: no-repeat center;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border: 1px solid #eee;
    background-origin: padding-box;
    cursor: pointer;
  }

  .flag-zh-CN {
    display: inline-block;
    margin-top: 10px;
    width: 30px;
    height: 30px;
    background-image: url(../../../assets/img/zh-CN.png);
    background-repeat: no-repeat;
    background-size: contain;
  }

  .flag-en-US {
    display: inline-block;
    margin-top: 10px;
    width: 30px;
    height: 30px;
    background-image: url(../../../assets/img/en-US.png);
    background-repeat: no-repeat;
    background-size: contain;
  }

  .flag-ja-JP {
    display: inline-block;
    margin-top: 10px;
    width: 30px;
    height: 30px;
    background-image: url(../../../assets/img/ja-JP.png);
    background-repeat: no-repeat;
    background-size: contain;
  }

  .dropdown_item {
    padding: 8px;
  }

  .pc-menu .el-dropdown-menu__item {
    padding: 10px !important;
    line-height: 0 !important;
  }

  .pc-menu .flag-zh-CN,
  .pc-menu .flag-en-US,
  .pc-menu .flag-ja-JP {
    margin-top: 0;
  }
</style>
