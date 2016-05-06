/**
 * Created by baixiaosheng on 2016/5/6.
 */
export function configRouter (router) {
  router.map({
    '/': {
      component: (resolve) => {
        require(['./components/Hello'], resolve)
      }
    },
    '/test': {
      component: (resolve) => {
        require(['./components/Test'], resolve)
      }
    },
    '*': {
      component: (resolve) => {
        require(['./components/Hello'], resolve)
      }
    }
  })
}
