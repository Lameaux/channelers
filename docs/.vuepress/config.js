module.exports = {
    lastUpdated: 'Last Updated', // string | boolean
    title: 'Hi VuePress',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
	],
	ga: '',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Test', link: '/test/' },
          { text: 'External', link: 'https://google.com' },
        ]
    },
    sidebar: 'auto'
}