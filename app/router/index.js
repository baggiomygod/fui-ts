import Vue from 'vue'
import Router from 'vue-router'
// ts
import TsList from 'views/ts/ts.vue'
import BaseData from 'views/ts/base-data/base-data.vue'
import Interface from 'views/ts/interfaces/interfaces.vue'

// fui
import Fui from 'views/fui/fui.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/fui', name:'fui', component: Fui, children: []},
    {path: '/ts-list', name: 'ts-list', component: TsList,
      children:[
        {path:'base-data', component: BaseData, name: 'base-data'},
        {path:'interface', component: Interface, name: 'interface'}
      ]
    }
  ]
})