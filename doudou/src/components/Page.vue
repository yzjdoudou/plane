<template>
    <div class="filmPage">
      <ul>
        <li v-for="(page,index) in maxPage">
        <router-link :to="{path:'/',query:{id:index}}" >{{page}}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      props:['maxPage'],
    }
</script>

<style scoped>


</style>
