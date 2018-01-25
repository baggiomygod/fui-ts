import Vue from 'vue'
import Router from 'vue-router'
// ts
import TsList from 'views/ts/ts.vue'
import BaseData from 'views/ts/base-data/base-data.vue'
import Interface from 'views/ts/interfaces/interfaces.vue'

// fui
import Fui from 'views/fui/fui.vue'
import Css from 'views/css/css.vue'
import CssBox from 'views/css/box/box.vue'
import Layout from 'views/css/layout/layout.vue'
import LayoutRow from 'views/css/layout-row/layout-row.vue'
import TBLayout from 'views/css/layout-row/1_top-bottom-layout.vue'

// interview
import InterView from 'views/interview/interview.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/fui', name: 'fui', component: Fui, children: [] },
    {
      path: '/css', name: 'css', component: Css,
      children: [
        { path: 'css-box', name: 'css-box', component: CssBox }
      ]
    },
    {
      path: '/ts-list', name: 'ts-list', component: TsList,
      children: [
        { path: 'base-data', component: BaseData, name: 'base-data' },
        { path: 'interface', component: Interface, name: 'interface' }
      ]
    },
    {
      path: '/interview', component: InterView, name: 'inter-view',
      children: [
        { path: 'layout', component: Layout, name: 'layout' },
        { path: 'css-box', name: 'css-box', component: CssBox },
        {
          path: 'layout-row', name: 'layout-row', component: LayoutRow,
          children: [
            { path: 'tb-layout', component: TBLayout, name: 'tb-layout' }
          ]
        }
      ]
    }
  ]
})
