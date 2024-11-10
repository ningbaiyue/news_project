/*
 * @作者: NingBY
 * @Date: 2024-11-07 19:23:53
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import MainBox from '@/views/MainBox.vue'
import RoutesConfig from './config'
import store from '@/store'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: MainBox
  }
  // mainbox的嵌套路由, 后面根据权限动态添加
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 每次路由跳转之前
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    if (!store.state.isGetterRouter) {
      ConfigRouter()
      next({
        path: to.fullPath
      })
    } else {
      next()
    }
  }
})

const ConfigRouter = () => {
  RoutesConfig.forEach(item => {
    router.addRoute('mainbox', item)
  })

  // 改变isGetterRouter =  true

  store.commit("changeGetterRouter",true)
}
export default router
