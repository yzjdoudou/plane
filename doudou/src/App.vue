<template>
  <div id="app">
    <head-title :title="title" v-if="show"></head-title>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeadTitle from '@/components/HeadTitle'

export default {
  name: 'App',
  components:{
    HeadTitle,
  },
  data(){
    return{
      title:'',
      show:'true'
    }
  },
  async created() {
    this.$root.$children[0].show=true;
    let {data: {title}} = await this.$axios.get('/api/v2/movie/top250?count=20&&start='+this.route.query.page*20)
    this.title=title

  }
  }
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
</style>
