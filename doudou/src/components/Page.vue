<template>
    <div class="filmPage">
      <ud>
        <li v-for="(page,index) in maxPage">
        <router-link :to="{path:'/',query:{page:index}}">{{page}}</router-link>
        </li>
      </ud>
    </div>
</template>

<script>
    export default {
      props:['maxPage'],
    }
</script>

<style scoped>


</style>
