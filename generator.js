// https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5
module.exports = (api, opts, rootOpts) => {
    addDependencies(api, opts)
    renderFiles(api, opts)
}

function renderFiles(api, opts) {
    const filesToDelete = [
        // 'postcss.config.js',
        // '_browserslistrc',
        // 'babel.config.js',
        // '.gitignore',
        '.eslintrc.js',
        // 'public/favicon.ico',
        // 'public/index.html',
        'src/App.vue',
        'src/main.js',
        'src/assets/logo.png',
        'src/components/HelloWorld.vue',
        'src/router/index.js',
        'src/views/About.vue',
        'src/views/Home.vue'
    ]

    // console.log('\n[luban-h5 component plugin tips]\n \t GeneratorAPI options:', opts)

    // https://github.com/vuejs/vue-cli/issues/2470
    api.render(files => {
        Object.keys(files)
            .filter(name => filesToDelete.indexOf(name) > -1)
            .forEach(name => delete files[name])
    })

    api.render('./templates')

    // 配置文件
    api.render({
        './.eslintrc.js': './templates/_eslintrc.js',
        './.env.development': './templates/_env.development',
        './.env.production': './templates/_env.production',
        './.env.test': './templates/_env.test',
        './.browserslistrc': './templates/_browserslistrc',
        './.prettierrc': './templates/_prettierrc',
        './.stylelintrc.json': './templates/_stylelintrc.json',
        './.stylelintignore': './templates/_stylelintignore',
    })
}

function addDependencies(api, opts) {
    // 修改 `package.json` 中的字段
    api.extendPackage({
        "name": opts.name,
        "version": "0.1.0",
        "private": true,
        "scripts": {
            "dev": "vue-cli-service serve",
            "build": "vue-cli-service build",
            "build:test": "vue-cli-service build --mode test",
            "build:pre": "vue-cli-service build --mode pre",
            "lint": "vue-cli-service lint",
            "lint-fix": "eslint --fix --ext .js --ext .vue src/",
            "docs:dev": "vuepress dev docs",
            "docs:build": "vuepress build docs"
        },
        "dependencies": {
            "axios": "^0.19.2",
            "core-js": "^3.6.4",
            "vue": "^2.6.11",
            "vue-router": "^3.1.6",
            "vuex": "^3.1.3",
            "webpack-bundle-analyzer": "^3.7.0"
        },
        "devDependencies": {
            "@vue/cli-plugin-babel": "^4.3.0",
            "@vue/cli-plugin-eslint": "^4.3.0",
            "@vue/cli-service": "^4.3.0",
            "@vue/eslint-config-prettier": "^6.0.0",
            "amfe-flexible": "^2.2.1",
            "babel-eslint": "^10.1.0",
            "eslint": "^6.7.2",
            "eslint-plugin-prettier": "^3.1.1",
            "eslint-plugin-vue": "^6.2.2",
            "node-sass": "^4.12.0",
            "postcss-px2rem-exclude": "^0.0.6",
            "prettier": "^1.19.1",
            "sass-loader": "^8.0.2",
            "stylelint": "^13.5.0",
            "vue-template-compiler": "^2.6.11",
            "vuepress": "^1.5.0"
        }
    })
}
