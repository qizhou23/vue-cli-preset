/**
 * 找到@/views下所有路由routes.js文件，全部合并到routes里，并导出
 * 后由@/router/index.js注册到路由里。
 * 各路由下的routes.js文件格式，见文档
 */
const lazy = (commonPath, path) => () => import(`@/views/${commonPath}/${path}`)

const requireComponent = require.context('@/views', true, /routes\.js$/)

let routes = []
console.log(requireComponent.keys())

requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath)
  const defaultConfig = componentConfig.default
  const configRoutes = defaultConfig.routes
  configRoutes.map(route => {
    route.component = lazy(defaultConfig.commonPath, route.component)
    if (!route.meta || (route.meta && !route.meta.title)) {
      route.meta = { ...{}, ...route.meta }
      route.meta.title = defaultConfig.title
    }
  })
  routes = [...routes, ...configRoutes]
})
export default routes
