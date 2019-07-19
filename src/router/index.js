import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from "@/page/home"
import answer from "@/page/answer"
import score from "@/page/score"


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:"/answer",
      name:"answer",
      component:answer
    },
    {
      path:"/score",
      name:"score",
      component:score
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
