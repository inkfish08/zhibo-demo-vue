<template lang="html">
  <div class="swiper-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="game in gameList|limitBy 16">
        <a v-link="{name:'liveroom',params:{shortName:game.short_name}}" class="game-item">
          <img :src="game.game_icon" alt="" class="game-icon" />
          <p class="game-name">{{game.game_name}}</p>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  <roomlist :room-list="roomList"></roomlist>
</template>

<script>
import roomlist from '../global/roomlist';
import {swiper,swiperSlide} from 'vue-awesome-swiper';

export default {
  data(){
    return{
      gameList:[],
      roomList:[],
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 1,
        onClick(swiper, event) {
          // console.log('Swiper-onClick.activePageIndex:', swiper.activeIndex)
          // console.log('Swiper-onClick.current Page activeItemIndex:', swiper.clickedIndex)
        }
      }
    }
  },
  created(){
    this.$http.get('/game').then((res)=>{
      res = res.data;
      this.gameList = res.data;
    });
    this.$http.get('/room').then((res)=>{
      res = res.data;
      this.roomList = res.data;
    })
  },
  components:{
    roomlist,swiper,swiperSlide
  }
}
</script>

<style lang="stylus">
.swiper-wrapper
  background #fff
  margin-bottom 10px
  .swiper-container
    height auto
    margin-left auto
    margin-right auto
    .swiper-slide
      height 100px
      text-align center
      .game-item
        display block
        width 100%
        padding-top 10px
        .game-icon
          width 50px
          height 50px
          border-radius 50%
        .game-name
          font-size 14px
          line-height 20px
          font-weight 700
.room-wrapper
  width 100%
  height 100%
  font-size 0
  .room-title
    display block
    position relative
    height 30px
    line-height 30px
    font-size 18px
    padding-left 10px
    color #000
    .more
      position absolute
      right 10px
      font-size 12px
  .room-list
    display flex
    flex-wrap wrap
    width 100%
    .room-bg
      .room-image
        width 140px
        height 100px

</style>
