<template>
  <div id="userLeftMenu">
    <el-menu mode="vertical" class="el-menu-vertical-demo" :default-active="$route.path"  router>
      <header class="main-header">
        <div class="logo">
          <img src="../../assets/img/logo-white.png" height="40" width="201" alt="">
        </div>
      </header>
      <div class="backmanage">
        <div class="iconInfo">
          <a @click="back"><div class="user_icon"><i class="icon icon-ic_backhome"></i></div></a>
        </div>
        <div class="switch">
          <span>{{ user.username }}</span>
        </div>
      </div>
      <div id="userWrapper">
        <div class="userScroller">
          <div>
          <el-menu-item-group :title="$t('menu.my')">
            <el-menu-item index="/user/profile"><i class="icon icon-ic_information"></i>{{ $t('menu.profile') }}</el-menu-item>
            <!--<el-menu-item index="/user/notice"><i class="icon icon-ic_message"></i>{{ $t('menu.notice') }}</el-menu-item>-->
          </el-menu-item-group>
          <el-menu-item-group :title="$t('menu.team_manage')" v-if="$store.getters.isTeamAdmin || $store.getters.isProjectAdmin">
            <el-menu-item index="/team/member" v-if="$store.getters.isTeamAdmin"><i class="icon icon-ic_team"></i>{{ $t('menu.team_member') }}</el-menu-item>
            <el-menu-item index="/team/group" v-if="$store.getters.isTeamAdmin"><i class="icon icon-ic_group"></i>{{ $t('menu.team_group') }}</el-menu-item>
            <el-menu-item index="/team/project" v-if="$store.getters.isTeamAdmin || $store.getters.isProjectAdmin"><i class="icon icon-ic_project"></i>{{ $t('menu.team_project') }}</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group :title="$t('menu.service')">
            <el-menu-item index="/team/purchase"><i class="icon icon-ic_Purchasing-servic"></i>{{ $t('menu.purchase') }}</el-menu-item>
            <el-menu-item index="/team/order"><i class="icon icon-ic_order"></i>{{ $t('menu.order') }}</el-menu-item>
            <el-menu-item index="/team/contact"><i class="icon icon-ic_contact"></i>{{ $t('menu.contact') }}</el-menu-item>
          </el-menu-item-group>
          </div>
        </div>
      </div>
      <div class="backhome btn-white-mask">
        <div class="user_icon" @click="logout"><i class="icon icon-ic_out"></i><i>{{ $t('menu.logout') }}</i></div>
      </div>
    </el-menu>
  </div>
</template>

<script>
import * as types from '../../store/types'
import { projectApiList } from '../../api/manage'
export default {
  name: 'UserLeftMenu',
  data () {
    return {
      user: this.$store.state.user.user,
      myScroll: null,
      projectApiDataList: []
    }
  },
  methods: {
    logout () {
      this.$store.dispatch(types.LOGOUT).then(() => {
        this.$router.replace('/login')
      })
    },
    back () {
      if (this.projectApiDataList.length > 0) {
        this.$router.replace('/manage/project/' + this.projectApiDataList[0].project.projectId)
      } else {
        this.$router.replace('/manage')
      }
    }
  },
  mounted () {
    this.projectApiDataList = []
    projectApiList().then(response => {
      this.projectApiDataList = response.data.projectApiDataList
    }).catch(error => console.error(error))
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/style.styl'
  @import '/static/css/fonts.css'
  #userLeftMenu
    .el-menu-vertical-demo
      top 0!important
      z-index -1
    .main-header
      display table
      width 300px
      height 110px
      text-align center
      background-color $color-09
      .logo
        display table-cell
        vertical-align middle
    #userWrapper
      position absolute
      top 164px
      bottom 0px
      width 100%
      z-index -1
      overflow hidden
      .userScroller
        width 316px
        overflow-x hidden
        overflow-y scroll
        height 100%
        padding-bottom 60px
    .backmanage
      position relative
      width 300px
      background $color-12
      height 48px
      a,.iconInfo
        position absolute
        left 0
        top 0
        bottom 0
        width 48px
        height 48px
        line-height 48px!important
        color #fff
        background-color $color-12
        cursor pointer
        text-align center
        .icon-ic_backhome
          margin-right 0!important
        &:hover
          background-color #599b9d
        i
          font-size $font-18
      .switch
        display inline-block
        width 251px
        height 43px
        line-height 43px
        float right
        text-align center
        background-color $color-01
        span
          font-size $font-14
          color $color-12
    .backhome:hover
      cursor pointer
    .backhome
      position fixed
      bottom 0
      width 300px
      background $color-09
      color #fff
      font-size $font-18
      text-align center
      height 48px
      line-height 48px
      i
        font-style normal
        cursor pointer
        letter-spacing 2px
    .el-menu-vertical-demo
      width 300px
      background-color $color-01
      position fixed
      bottom 0
      top 110px
    .el-menu-item-group__title
      color $color-05
      padding-top 15px
      font-size $font-14
      font-weight bold
      padding-bottom 10px
    .el-menu-item
      color $color-05
      font-size $font-12
      height 45px
      line-height 45px
    .el-menu-item:hover
      background-color $color-01
      color $color-09
      border-left 5px solid $color-09
      padding 0 15px !important
    .el-menu-item
      transition inherit
      &.is-active
        border-left 5px solid $color-09
        padding 0 15px !important
        color $color-09
    .icon
      margin-right 10px
</style>
