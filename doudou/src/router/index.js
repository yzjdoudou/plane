import Vue from 'vue'
import Router from 'vue-router'
import BodyContent from '@/components/BodyContent'
import SingleFile from '@/components/SingleFile'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:BodyContent},
    {path:'/film/:id',name:'SingleFile',component:SingleFile}
    ]
})
