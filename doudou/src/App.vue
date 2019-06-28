<template>
  <div id="app">
        <head-title></head-title>
        <!--<body-content></body-content>-->
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

}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
</style>
