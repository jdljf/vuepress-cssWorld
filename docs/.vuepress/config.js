module.exports = {
    base: '/vuepress-cssWorld/',     // 部署站点的基础路径
    title: '《css世界》例子',        // 网站的标题
    description: '廖峻锋创建',       // 网站的描述
    head: [                         // 额外的需要被注入到当前页面的 HTML <head> 中的标签
        // ['link', { rel: 'icon', href: '/logo.png'}]
    ],
    host: '0.0.0.0',                // 指定用于 dev server 的主机名
    post: 8080,                     // dev server的端口
    dest: '.vuepress/dist',         // 指定 vuepress build 的输出目录
    ga: undefined,                  // 提供一个 google analytics ID 来使 GA 生效
    locales: {},                    // 提供多语言支持的语言配置
    shouldPrefetch: () => true,     // 一个函数，用来控制对于哪些文件，是需要生成 <link rel="prefetch"> 资源提示的
    cache: true,                    // 此选项可以用于指定 cache 的路径
    theme: undefined,               // 当你使用自定义主题时，需要指定他
    themeConfig: {                  // 为当前的主题提供一些配置，这些配置依赖于你正在使用的主题
        // nav: [
        //     { text: '主页', link: '/' },
        //     { text: '前端规范', link: '/frontEnd/' },
        //     { text: '开发环境', link: '/development/' },
        //     { text: '学习文档', link: '/notes/' },
        //     { text: '游魂博客', link: 'https://www.iyouhun.com' },
        //     // 下拉列表的配置
        //     {
        //         text: 'Languages',
        //         items: [
        //             { text: 'Chinese', link: '/language/chinese' },
        //             { text: 'English', link: '/language/English' }
        //         ]
        //     }
        // ],
        sidebar: [
            {
                title: '第一章',
                children: [
                    '/1.1/',
                    '/1.2/'
                ]
            },
            {
                title: '第二章',
                children: ['/components/button']
            },
            {
                title: '第三章'
            },
            {
                title: '第四章'
            }
        ],        
        sidebarDepth: 2             // 这是嵌套标题链接，自动显示当前激活（导航）页面标题的链接，即显示深度（h1-h6的深度）
    },
    Plugins: [                      // 使用插件

    ],
    markdown: {
        lineNumbers: undefined,     // 是否在每个代码块的左侧显示行号
        // slugify: source,             // 一个将标题文本转换成 slug 的函数。修改它会影响 标题、目录、以及侧边栏的 id 和 连接
        externalLinks: {            // 这个键值对将会作为特性被增加到是外部链接的 <a> 标签上，默认的选项将会在新窗口中打开一个该外部链接
            target: '_blank',
            rel: 'noopener noreferrer'
        }
    }
}