<template>
    <div class="filmsList">
      <ul>
        <router-link :to="{name:'SingleFilelink',params:{id:'subjects.id'}}" v-for="(film,index) in subjects" tag="li" :key="index">
            <img src="film.images.medium" alt="">
            <p>{{film.original_title}}</p>
            <p>
              <span v-for="genre in film.genres">{{genre}}</span>
            </p>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          subjects:[],
        }
      },
      async created(){
        let {data}= await  this.$axios.get('/api/v2/movie/top250?count=20&&start=0')
        this.subjects=data.subjects
      },
      watch:{
        $route:{
         async handler(){
           let {data:{subjects}}= await  this.$axios.get('https://api.douban.com/v2/movie/top250?count=20&&start='+this.route.query.page*20)
      this.subjects=subjects
          }
        }
      }
    }

</script>

<style scoped>


</style>
