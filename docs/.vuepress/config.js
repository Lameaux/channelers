module.exports = {
    lastUpdated: 'Last Updated', // string | boolean
    title: 'Channelers',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        //['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.10/js/uikit.min.js' }]
	],
	ga: '',
    themeConfig: {
        nav: [
          { text: 'Home', position: 'left', link: '/' },
          { text: 'Channelers', link: '/channelers/' },
          { text: 'Test', link: '/test/' },
          { text: 'External', link: 'https://google.com' },
        ]
    },
    sidebar: 'auto'
}