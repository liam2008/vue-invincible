/**
 * 把注册路由的那个属性对应到侧边栏属性
 * @param {*} router
 */
export function formatRouter(router) {
  router.forEach(function(val, index) {
    if (val.children && val.children.length > 1) {
      val.children.forEach(function(childVal, childIndex) {
        if (childVal.hidden) {
          val.children.splice(childIndex, 1)
        }
      })
    }
  })
  console.log('router', router)
  return router
}

