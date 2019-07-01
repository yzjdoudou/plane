<template>
    <div class="singlefilm">
      <head-title :msg="msg"></head-title>
    </div>
</template>

<script>
  import HeadTitle from '@/components/HeadTitle'
    export default {
        data() {
            return {
                msg: ''
            }
        },
      template:{
        HeadTitle
      },
      created(){
          this.$root.$children[0].show=false,
      }
    }
</script>

<style scoped>


</style>
