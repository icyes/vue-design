const {resolve} = require('path')

module.exports = {
    base: process.env.NODE_ENV === "development" ? '/': '/vue-design/',
    title:'vue 源码学习',
    themeConfig: {
        heroText:'vue 源码学习',
        displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: [
            ['/essence-of-comp', '组件的本质'],
            ['/vnode', '先设计 VNode 吧'],
            ['/h', '辅助创建 VNode 的 h 函数'],
            ['/renderer', '渲染器之挂载'],
            ['/renderer-patch', '渲染器之patch'],
            ['/renderer-diff', '渲染器的核心 Diff 算法'],
            ['/renderer-advanced', '自定义渲染器'],
            ['/stateful-component', '有状态组件的设计'],
            ['/observer', '基于 Proxy 的响应系统'],
            ['/component-expand', '组件的拓展']
        ],
        repo: 'HcySunYang/vue-design',
        docsDir: 'docs',
        editLinks: false,
        // sidebar: 'auto'
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@as': resolve(__dirname, './assets'),
                '@imgs': resolve(__dirname, './assets/imgs')
            }
        }
    }
}
