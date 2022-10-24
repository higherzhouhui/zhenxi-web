module.exports = {
  target: 'static',
  head: {
    title: '费用管理系统_企业费用支出_财务管理软件-企金控-振翕科技',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: '费用管理系统,企业费用支出,财务管理软件'},
      { name: 'description', content: '企金控是一款基于支付的费用管理系统、企业费用支出、财务管理软件，覆盖企业支出事前事后全流程，带来更高效、更省钱的支出管理效果'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/style/index.css',
    { src: '@/assets/style/index.scss', lang: 'scss' }
  ],
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios.js',
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/postcss8'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    prefix: '/api/',
    credential: true
  },
 
  proxy: {
    '/api/': {
      target: 'http://47.96.184.203:8081', // 目标服务器ip
      pathRewrite: {
        '^/api/': '/',  // 把 /api 替换成 /
        changeOrigin: true // 是否跨域
      }
    }
  },
 
 
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["axios"]
  },
  telemetry: false,
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost只能用于本机访问，如果需要对外访问需要设置0.0.0.0
  },
  dev: process.env.NODE_ENV !== 'production',
}
