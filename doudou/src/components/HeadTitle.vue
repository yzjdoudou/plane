<template>
  <div class="headTitle">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HeadTitle',
    props:['msg']
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    width:1200px;
    margin:0 auto 20px;
    background-color: #222;
    color:#2ad487;
    line-height:80px;
    text-indent:20px;
    border-bottom: 3px solid #2ad487;
  }

</style>
