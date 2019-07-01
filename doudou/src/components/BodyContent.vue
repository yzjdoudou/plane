<template>
    <div class="content">
        <films-list></films-list>
        <page :maxPage="maxPage"></page>
    </div>
</template>

<script>
  import FilmsList from '@/components/FilmsList'
  import Page from '@/components/Page'
    export default {
        data() {
            return {
                maxPage: '',

            }
        },
      components:{
        FilmsList,
        Page
      },
      async created(){
        let {data:{total},data:{count}}= await  this.$axios.get('/api/v2/movie/top250?count=20&&start=0')
  this.maxPage=Math.ceil(total/count)

  }
    }
</script>

<style scoped>


</style>
