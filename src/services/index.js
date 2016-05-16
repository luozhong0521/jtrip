/**
 * index请求数据
 * baixiaosheng创建;佛祖保佑,永无BUG
 */
var Vue = require('vue')
export default {
  getData (transition) {
    Vue.http.get('static/json/index.json').then((res) => {
      transition.next({data: res.data})
    }, (res) => {
      transition.abort()
    })
  }
}
