const path = require('path')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath: '',

    // 打包路径
    outputDir: './dist/',

    assetsDir: 'static',
    productionSourceMap: false,

    devServer: {
        open: true,
        proxy: {
            '/api/': {
                target: `${process.env.VUE_APP_BASE_URL}/api/`,
                pathRewrite: {
                    '^/api/': ''
                }
            }
        }
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '@com': resolve('src/components')
            }
        },
        plugins: [
            // 需要运行analyze命令时，打开该插件
            // new BundleAnalyzerPlugin()
        ]
        // 待测试，拆包
        // optimization: {
        //     splitChunks: {
        //         chunks: 'async', // 仅提取按需载入的module
        //         minSize: 30000, // 提取出的新chunk在两次压缩(打包压缩和服务器压缩)之前要大于30kb
        //         maxSize: 0, // 提取出的新chunk在两次压缩之前要小于多少kb，默认为0，即不做限制
        //         minChunks: 1, // 被提取的chunk最少需要被多少chunks共同引入
        //         maxAsyncRequests: 5, // 最大按需载入chunks提取数
        //         maxInitialRequests: 3, // 最大初始同步chunks提取数
        //         automaticNameDelimiter: '~', // 默认的命名规则（使用~进行连接）
        //         name: true,
        //         cacheGroups: { // 缓存组配置，默认有vendors和default
        //             vendors: {
        //                 test: /[\\/]node_modules[\\/]/,
        //                 priority: -10
        //             },
        //             default: {
        //                 minChunks: 2,
        //                 priority: -20,
        //                 reuseExistingChunk: true
        //             }
        //         }
        //     }
        // }
    },

    transpileDependencies: [
        'promise'
    ],

    css: {
        loaderOptions: {
            scss: {
                prependData: `@import '~@/assets/css/index.scss';`
            }
        }
    },


    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')

        // 或者
        // 修改它的选项：
        // config.plugin('prefetch').tap(options => {
        //     options[0].fileBlacklist = options[0].fileBlacklist || []
        //     options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
        //     return options
        // })
    }
}
