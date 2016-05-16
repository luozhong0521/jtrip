/**
 *  项目入口文件
 * baixiaosheng创建;佛祖保佑,永无BUG
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import { configRouter } from './router-config'

Vue.use(VueRouter)
Vue.use(Resource)
Vue.http.options.emulateJSON = true

Vue.filter('dateFormat', (value, format) => {
  let date = new Date(value)
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
})

const router = new VueRouter({history: true, saveScrollPosition: true})

configRouter(router)

const App = Vue.extend(require('./App'))
router.start(App, '#app')

