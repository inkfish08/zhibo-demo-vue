<template lang="html">
  <subheader :title="title"></subheader>
  <div class="roomlist">
    <a class="room-item" v-for="room in roomList" v-link="{name:'room',params:{id:room.room_id}}" >
      <div class="room-bg">
        <img :src="room.room_src" alt="" class="room-image">
        <span class="room-online">{{room.online}}</span>
        <span class="room-nickname">{{room.nickname}}</span>
      </div>
      <p class="room-name">{{room.room_name}}</p>
    </a>
  </div>
</template>

<script>
import subheader from '../global/subheader'
export default {
  data(){
    return{
      roomList:[],
      title:''
    }
  },
  components:{
    subheader
  },
  created(){
    let id = this.$route.params.shortName;
    this.$http.get('/room/'+id).then((res)=>{
      res = res.data;
      this.roomList = res.data;
      this.title = res.data[0].game_name;
    })
  },
  components:{
    subheader
  }
}
</script>

<style lang="stylus">
.roomlist
  display flex
  flex-wrap wrap
  width 100%
  .room-item
    width 50%
    text-align center
    padding 5px
    box-sizing border-box
    height 100%
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
        bottom 5px
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
