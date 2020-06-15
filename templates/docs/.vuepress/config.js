module.exports = {
    // 网站的标题，它将会被用作所有页面标题的前缀
    title: 'Just playing',
    // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    description: 'Just playing around',
    head: [
        // 配置网页的icon
        // 没生效
        ['link', { rel: 'icon', href: '/sun.png' }]
    ],
    themeConfig: {
        sidebar: [
            '/',
            {
                title: 'Group',
                children: [ 'guide/']
            }
        ],
        displayAllHeaders: true,
        lastUpdated: '最后更新：',
    }
}
