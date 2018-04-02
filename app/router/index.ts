import Vue from 'vue'
import Router from 'vue-router'
// ts
import TsList from 'views/ts/ts.vue'
import BaseData from 'views/ts/base-data/base-data.vue'
import Interface from 'views/ts/interfaces/interfaces.vue'
import PromiseTest from 'views/ts/promise/promise.vue'

// fui
import Fui from 'views/fui/fui.vue'
import Css from 'views/css/css.vue'
import CssBox from 'views/css/box/box.vue'
import CssBfc from 'views/css/bfc/bfc.vue'
import Layout from 'views/css/layout/layout.vue'
import LayoutRow from 'views/css/layout-row/layout-row.vue'
import TBLayout from 'views/css/layout-row/1_top-bottom-layout.vue'
import TBFloatLayout from 'views/css/layout-row/2_top-bottom-float.vue'
import TBFlexLayout from 'views/css/layout-row/3_top-bottom-flex.vue'
import TBTableLayout from 'views/css/layout-row/4_top-bottom-table.vue'
import TBGridLayout from 'views/css/layout-row/5_top-bottom-grid.vue'

// interview
import InterView from 'views/interview/interview.vue'
import Socket from 'views/socket/socket.vue'
import SocketIO from 'views/socket/socket.io.vue'
import VMap from 'views/map/map.vue'
Vue.use(Router)

const routes = [
  { path: '/', redirect: '/fui' },
  { path: '/fui', name: 'fui', component: Fui, children: [] },
  {
    path: '/css', name: 'css', component: Css,
    children: [
      { path: 'css-box', name: 'css-box', component: CssBox },
      { path: 'css-bfc', name: 'css-bfc', component: CssBfc }
    ]
  },
  {
    path: '/ts-list', name: 'ts-list', component: TsList,
    children: [
      { path: 'base-data', component: BaseData, name: 'base-data' },
      { path: 'interface', component: Interface, name: 'interface' },
      { path: 'promise', component: PromiseTest, name: 'promise-test' }
    ]
  },
  {
    path: '/interview', component: InterView, name: 'inter-view',
    children: [
      { path: 'layout', component: Layout, name: 'layout' },
      { path: 'css-box', name: 'css-box', component: CssBox },
      { path: 'css-bfc', name: 'css-bfc', component: CssBfc },
      {
        path: 'layout-row', name: 'layout-row', component: LayoutRow,
        children: [
          { path: 'tb-layout', component: TBLayout, name: 'tb-layout' },
          { path: 'tbf-layout', component: TBFloatLayout, name: 'tbf-layout' },
          { path: 'tbflex-layout', component: TBFlexLayout, name: 'tbflex-layout' },
          { path: 'tbtable-layout', component: TBTableLayout, name: 'tbtable-layout' },
          { path: 'tbgrid-layout', component: TBGridLayout, name: 'tbgrid-layout' },
          { path: 'css-bfc', name: 'css-bfc', component: CssBfc }
        ]
      }
    ]
  },
  { path: '/socket', component: Socket, name: 'socket' },
  { path: '/socket-io', component: SocketIO, name: 'socket-io' },
  { path: '/map', component: VMap, name: 'map' }
]

export default new Router({ routes })
