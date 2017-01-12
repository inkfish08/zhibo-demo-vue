<template lang="html">
  <div class="nav">
    <div class="nav-item">
      <a v-link="{path:'/index'}" class="item">
        <i class="nav-icon icon-home2"></i>
        <p class="nav-title">首页</p>
      </a>
    </div>
    <div class="nav-item">
      <a v-link="{path:'/live'}" class="item">
        <i class="nav-icon icon-play"></i>
        <p class="nav-title">直播</p>
      </a>
    </div>
    <div class="nav-item">
      <a v-link="{path:'/focus'}" class="item">
        <i class="nav-icon icon-podcast"></i>
        <p class="nav-title">关注</p>
      </a>
    </div>
    <div class="nav-item">
      <a v-link="{path:'/find'}" class="item">
        <i class="nav-icon icon-price-tags"></i>
        <p class="nav-title">发现</p>
      </a>
    </div>
    <div class="nav-item">
      <a v-link="{path:'/mine'}" class="item">
        <i class="nav-icon icon-user"></i>
        <p class="nav-title">我的</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
  .nav
    display flex
    position fixed
    bottom 0
    left 0
    width 100%
    z-index 99
    background #fff
    border-top 1px solid rgba(56, 49, 54, 0.1)
    .nav-item
      flex 1
      text-align center
      .item
        display block
        padding 8px 5px
        color rgba(27, 30, 31, 0.55)
        &.active
          color rgb(241, 120, 33)
          background rgba(56, 49, 54, 0.1)
        .nav-icon
          font-size 20px
        .nav-title
          font-size 12px
          height 20px
          line-height 22px
</style>
