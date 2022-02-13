const {resolve} = require('path')

module.exports = {
    base: process.env.NODE_ENV === "development" ? '/' : '/vue-design/',
    title: 'vue 源码学习',
    themeConfig: {
        heroText: 'vue 源码学习',
        displayAllHeaders: true,
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
            '/react/':[
                [
                    "",
                    "前言"
                ],
                {
                    "title": "理念篇",
                    "collapsable": true,
                    "children": [
                        {
                            "title": "第一章 React理念",
                            "children": [
                                [
                                    "preparation/idea",
                                    "React理念"
                                ],
                                [
                                    "preparation/oldConstructure",
                                    "老的React架构"
                                ],
                                [
                                    "preparation/newConstructure",
                                    "新的React架构"
                                ],
                                [
                                    "process/fiber-mental",
                                    "Fiber架构的心智模型"
                                ],
                                [
                                    "process/fiber",
                                    "Fiber架构的实现原理"
                                ],
                                [
                                    "process/doubleBuffer",
                                    "Fiber架构的工作原理"
                                ],
                                [
                                    "preparation/summary",
                                    "总结"
                                ]
                            ]
                        },
                        {
                            "title": "第二章 前置知识",
                            "children": [
                                [
                                    "preparation/file",
                                    "源码的文件结构"
                                ],
                                [
                                    "preparation/source",
                                    "调试源码"
                                ],
                                [
                                    "preparation/jsx",
                                    "深入理解JSX"
                                ]
                            ]
                        }
                    ]
                },
                {
                    "title": "架构篇",
                    "collapsable": true,
                    "children": [
                        {
                            "title": "第三章 render阶段",
                            "children": [
                                [
                                    "process/reconciler",
                                    "流程概览"
                                ],
                                [
                                    "process/beginWork",
                                    "beginWork"
                                ],
                                [
                                    "process/completeWork",
                                    "completeWork"
                                ]
                            ]
                        },
                        {
                            "title": "第四章 commit阶段",
                            "children": [
                                [
                                    "renderer/prepare",
                                    "流程概览"
                                ],
                                [
                                    "renderer/beforeMutation",
                                    "before mutation阶段"
                                ],
                                [
                                    "renderer/mutation",
                                    "mutation阶段"
                                ],
                                [
                                    "renderer/layout",
                                    "layout阶段"
                                ]
                            ]
                        }
                    ]
                },
                {
                    "title": "实现篇",
                    "collapsable": true,
                    "children": [
                        {
                            "title": "第五章 Diff算法",
                            "children": [
                                [
                                    "diff/prepare",
                                    "概览"
                                ],
                                [
                                    "diff/one",
                                    "单节点Diff"
                                ],
                                [
                                    "diff/multi",
                                    "多节点Diff"
                                ]
                            ]
                        },
                        {
                            "title": "第六章 状态更新",
                            "children": [
                                [
                                    "state/prepare",
                                    "流程概览"
                                ],
                                [
                                    "state/mental",
                                    "心智模型"
                                ],
                                [
                                    "state/update",
                                    "Update"
                                ],
                                [
                                    "state/priority",
                                    "深入理解优先级"
                                ],
                                [
                                    "state/reactdom",
                                    "ReactDOM.render"
                                ],
                                [
                                    "state/setstate",
                                    "this.setState"
                                ]
                            ]
                        },
                        {
                            "title": "第七章 Hooks",
                            "children": [
                                [
                                    "hooks/prepare",
                                    "Hooks理念"
                                ],
                                [
                                    "hooks/create",
                                    "极简Hooks实现"
                                ],
                                [
                                    "hooks/structure",
                                    "Hooks数据结构"
                                ],
                                [
                                    "hooks/usestate",
                                    "useState与useReducer"
                                ],
                                [
                                    "hooks/useeffect",
                                    "useEffect"
                                ],
                                [
                                    "hooks/useref",
                                    "useRef"
                                ],
                                [
                                    "hooks/usememo",
                                    "useMemo与useCallback"
                                ],
                            ]
                        },
                        {
                            "title": "第八章 Concurrent Mode",
                            "children": [
                                [
                                    "concurrent/prepare",
                                    "概览"
                                ],
                                [
                                    "concurrent/scheduler",
                                    "Scheduler的原理与实现"
                                ],
                                [
                                    "concurrent/lane",
                                    "lane模型"
                                ],
                                [
                                    "concurrent/disrupt",
                                    "异步可中断更新"
                                ]
                            ]
                        }
                    ]
                },
            ]

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
                link: '/react/'
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
