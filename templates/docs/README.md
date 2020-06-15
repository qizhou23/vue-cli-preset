# vue-cli-template
> 自建的 vue-cli4 模板项目
## 使用指南
* 建议直接使用 `vue create --preset /Users/wqr/source/vue-cli-preset my-test`进行一键安装
* `npm run dev` : 起服务，默认`0.0.0.0:8080`
* `npm run buid` : 生产环境打包
* `npm run build:test` : test环境打包，同理pre
* `npm run lint-fix` : eslint报错全局修复

## 配置列表
* router - 懒加载****
* vuex - 分模块展示
* 分环境配置项文件
    * 具体参考：[环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html)
    * 开发: .env.development
    * 测试: .env.test
    * 生产: .env.production
* axios - `src/js/request.js`
* devServer(proxyTable)
* alias:
    * @ - alias to `src`
    * @com - alias to `src/components`
 * scss文件全局导入
    * 要添加新的scss，需将新文件import进`src/assets/index.scss`
 * eslint - 较为个性化
