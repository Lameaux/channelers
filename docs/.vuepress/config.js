module.exports = {
    lastUpdated: 'Last Updated', // string | boolean
    title: 'Channelers',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'css', href: '/custom.css' }]
	],
	ga: '',
    themeConfig: {
        nav: [
          { text: 'Home', position: 'left', link: '/' },
          { text: 'Test', link: '/test/' },
          { text: 'External', link: 'https://google.com' },
        ]
    },
    sidebar: 'auto'
}