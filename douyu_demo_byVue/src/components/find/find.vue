<template lang="html">
  发现页面
</template>

<script>
export default {
  ready(){
    this.hideNav()
  },
  methods:{
    hideNav:function(){
      this.$dispatch('changeNav','hidden')
    }
  }
}
</script>

<style lang="stylus">
</style>
