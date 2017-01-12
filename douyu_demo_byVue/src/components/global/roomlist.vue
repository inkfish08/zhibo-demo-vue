<template lang="html">
  <div class="room-wrapper">
    <a class="room-title">王者荣耀<span class="more">更多</span></a>
    <div class="room-list">
      <div class="room-item" v-for="room in roomList|limitBy 4">
        <div class="room-bg">
          <img :src="room.room_src" alt="" class="room-image">
          <span class="room-online">{{room.online}}</span>
          <span class="room-nickname">{{room.nickname}}</span>
        </div>
        <p class="room-name">{{room.room_name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    roomList:{
      type:Array
    }
  }
}
</script>

<style lang="stylus">
.room-wrapper
  width 100%
  font-size 0
  background #fff
  .room-title
    display block
    position relative
    height 30px
    line-height 30px
    font-size 18px
    padding-left 10px
    color #000
    border-bottom 1px solid rgba(12, 13, 11, 0.65)
    .more
      position absolute
      right 10px
      font-size 12px
  .room-list
    display flex
    flex-wrap wrap
    width 100%
    .room-item
      width 50%
      text-align center
      padding 5px
      box-sizing border-box
      .room-bg
        position relative
        width 100%
        .room-image
          width 100%
          height 100%
          border-radius 5%
        .room-online,.room-nickname
          position absolute
          line-height 16px
          font-size 10px
          padding 0 5px
          color #fff
          background rgba(4, 5, 5, 0.38)
        .room-online
          right 0px
          top 0px
        .room-nickname
          left 0px
          bottom 0px
      .room-name
        font-size 12px
        color #000
        text-align left
        width 90%
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        height 20px
        line-height 20px
</style>
