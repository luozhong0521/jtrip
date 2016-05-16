/**
 * 路由配置文件
 * baixiaosheng创建;佛祖保佑,永无BUG
 */
export function configRouter (router) {
  router.map({
    '/': {
      component: (resolve) => {
        require(['./components/Index'], resolve)
      }
    },
    '/active': {
      component: (resolve) => {
        require(['./components/active/ActiveList'], resolve)
      }
    },
    '/travels': {
      component: (resolve) => {
        require(['./components/travels/TravelsList'], resolve)
      }
    },
    '*': {
      component: (resolve) => {
        require(['./components/Index'], resolve)
      }
    }
  })
}
