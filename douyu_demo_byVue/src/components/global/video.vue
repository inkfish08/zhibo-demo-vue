<template lang="html">
  <video id="video1" width="400" type="application/x-mpegURL" height="500" src="http://hlsa.douyucdn.cn/live/48699rJc0Vf5OEag_550/playlist.m3u8?wsSecret=e37fcbe533e24cdbfdf4a5d166f5c78b&wsTime=1484207596">
  </video>
</template>


<script>
export default {
  data(){
    return{
      url:''
    }
  },
  created(){
    let id = this.$route.params.id;
    console.log(id)
    // this.$http.get('/room/'+id).then((res)=>{
    //   res = res.data;
    //   this.roomList = res.data;
    //   this.title = res.data[0].game_name;
    // })
  }
}
</script>

<style lang="stylus">
</style>
