<template>
  <div>
    <router-view></router-view>
    <v-nav v-show="navShow == 'show'"><v-nav>
  </div>
</template>

<script>
import nav from './components/nav/nav';
export default {
  data(){
    return{
      gameList:{},
      roomList:{},
      navShow:'show',
      transitionName:'go'
    }
  },
  components: {
    'v-nav':nav
  },
  events:{
    'changeNav':function(show){
      this.navShow = show
    }
  }
}
</script>

<style lang="stylus">
// .go-transition
//   transition all 0.5s
//   &.go-enter,&.go-leave
//     maring-right -500px
</style>
