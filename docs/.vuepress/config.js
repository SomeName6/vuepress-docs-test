module.exports = {
    title: 'VuePress Docs Test',
    description: 'VuepPress Documentation Site Testing',
    base: "/",
    plugins: [
        '@vuepress/back-to-top',
    ],
    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/SomeName6/vuepress-docs-test',
        editLinks: true,
		docsDir: 'docs',
		editLinkText: 'Help us improve this page!',
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Guide', link: '/guide/'},
            { text: 'GitHub', link: 'https://github.com'},
        ],

        sidebar: [{
            title: 'The easy way',
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'/guide/',
				'/guide/script_usage',
            ],
        },
        {
            title: 'The manual way',
            collapsable: false,
            sidebarDepth: 2,
            children: [
				'/manually/',
                '/manually/some_page',
            ]
        },
        ]
    }
}
