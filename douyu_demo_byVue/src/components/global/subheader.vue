<template lang="html">
  <div class="header">
    <button class="btn-back" type="button" name="button"  @click="goback">&lt;</button>
    {{title}}
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String
    }
  },
  methods:{
    goback:function(){
      this.$dispatch('changeNav','show')
      history.back();
    },
    hideNav:function(){
      this.$dispatch('changeNav','hidden')
    }
  },
  created(){
    this.hideNav()
  }
}
</script>

<style lang="stylus">
  .header
    position relative
    height 40px
    line-height 40px
    text-align center
    background rgb(241, 120, 33)
    font-size 18px
    color #fff
    font-weight 700
    .btn-back
      position absolute
      left 5px
      height 40px
      width 40px
      font-size 20px
      color #fff
      border none
      background rgb(241, 120, 33)

</style>
