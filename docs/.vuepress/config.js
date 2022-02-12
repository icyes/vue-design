const {resolve} = require('path')

module.exports = {
    base: process.env.NODE_ENV === "development" ? '/' : '/vue-design/',
    title: 'vue 源码学习',
    themeConfig: {
        heroText: 'vue 源码学习',
        displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: {
            '/v1/': [
                ['essence-of-comp', '组件的本质'],
                ['vnode', '先设计 VNode 吧'],
                ['h', '辅助创建 VNode 的 h 函数'],
                ['renderer', '渲染器之挂载'],
                ['renderer-patch', '渲染器之patch'],
                ['renderer-diff', '渲染器的核心 Diff 算法'],
                ['renderer-advanced', '自定义渲染器'],
                ['stateful-component', '有状态组件的设计'],
                ['observer', '基于 Proxy 的响应系统'],
                ['component-expand', '组件的拓展']
            ],
            '/v2/': [
                {
                    title: '准备工作',
                    collapsable: false,
                    children: [
                        ['prepare/', 'Introduction'],
                        'prepare/flow',
                        'prepare/directory',
                        'prepare/build',
                        'prepare/entrance'
                    ]
                },
                {
                    title: '数据驱动',
                    collapsable: false,
                    children: [
                        ['data-driven/', 'Introduction'],
                        'data-driven/new-vue',
                        'data-driven/mounted',
                        'data-driven/render',
                        'data-driven/virtual-dom',
                        'data-driven/create-element',
                        'data-driven/update'
                    ]
                },
                {
                    title: '组件化',
                    collapsable: false,
                    children: [
                        ['components/', 'Introduction'],
                        'components/create-component',
                        'components/patch',
                        'components/merge-option',
                        'components/lifecycle',
                        'components/component-register',
                        'components/async-component'
                    ]
                },
                {
                    title: '深入响应式原理',
                    collapsable: false,
                    children: [
                        ['reactive/', 'Introduction'],
                        'reactive/reactive-object',
                        'reactive/getters',
                        'reactive/setters',
                        'reactive/next-tick',
                        'reactive/questions',
                        'reactive/computed-watcher',
                        'reactive/component-update',
                        'reactive/props',
                        'reactive/summary'
                    ]
                },
                {
                    title: '编译',
                    collapsable: false,
                    children: [
                        ['compile/', 'Introduction'],
                        'compile/entrance',
                        'compile/parse',
                        'compile/optimize',
                        'compile/codegen'
                    ]
                },
                {
                    title: '扩展',
                    collapsable: false,
                    children: [
                        ['extend/', 'Introduction'],
                        'extend/event',
                        'extend/v-model',
                        'extend/slot',
                        'extend/keep-alive',
                        'extend/tansition',
                        'extend/tansition-group'
                    ]
                },
                {
                    title: 'Vue Router',
                    collapsable: false,
                    children: [
                        ['vue-router/', 'Introduction'],
                        'vue-router/install',
                        'vue-router/router',
                        'vue-router/matcher',
                        'vue-router/transition-to'
                    ]
                },
                {
                    title: 'Vuex',
                    collapsable: false,
                    children: [
                        ['vuex/', 'Introduction'],
                        'vuex/init',
                        'vuex/api',
                        'vuex/plugin'
                    ]
                }
            ],
            '/v3/': [
                {
                    title: '先导篇',
                    collapsable: false,
                    children: [
                        ['guide/', 'Introduction']
                    ]
                },
                {
                    title: 'Vue.js 3.0 核心源码解析​',
                    collapsable: false,
                    children: [
                        ['new/', 'Introduction']
                    ]
                }
            ],

        },
        nav: [
            {
                text: 'HcySunYang版本',
                link: '/v1/essence-of-comp'
            },
            {
                text: '2.x 版本',
                link: '/v2/prepare/'
            },
            {
                text: '3.x 版本',
                link: '/v3/new/'
            },
            {
                text: 'React技术揭秘',
                link: 'https://react.iamkasong.com/'
            }
        ],
        repo: 'icyes/vue-design',
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
