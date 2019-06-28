import Vue from 'vue'
import Router from 'vue-router'
import SingleFile from '@/components/SingleFile'
import BodyContent from '@/components/BodyContent'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',components:BodyContent},
    {path:'/film/:id',name:'SingleFilelink',components:SingleFile}
    ]
})
