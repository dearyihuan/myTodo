import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import init from '@/pages/init'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'init',
      component: init
    }, {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }

  ]
})
