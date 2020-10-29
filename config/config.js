export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }],
    ],
    proxy: {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        },
    },
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                redirect: '/helloworld',
            },
            {
                icon: "icon-zhuchengxu",
                name: "helloworld",
                path: '/helloworld',
                component: './HelloWorld'
            },
            {
                icon: "icon-tougao",
                name: "dashboard",
                path: '/dashboard',
                routes: [
                    {
                        icon: "icon-tousujianyi",
                        name: 'analysis',
                        path: '/dashboard/analysis',
                        component: "./Dashboard/Analysis"
                    },
                    {
                        icon: "icon-zhuchengxu",
                        name: 'monitor',
                        path: '/dashboard/monitor',
                        component: "./Dashboard/Monitor"
                    },
                    {
                        icon: "icon-hangkongmoxing",
                        name: 'workplace',
                        path: '/dashboard/workplace',
                        component: "./Dashboard/Workplace"
                    },
                ]
            },
            {
                icon: "icon-feihangshipin",
                name: "puzzlecards",
                path: '/puzzlecards',
                component: './PuzzleCardsPage'
            },
            {
                icon: "icon-feihangshipin",
                name: "table",
                path: '/table',
                component: './Table'
            },
            {
                icon: "icon-feihangshipin",
                name: "uploaddown",
                path: '/uploadDown',
                component: './UploadDown'
            },
        ]
    }],
}