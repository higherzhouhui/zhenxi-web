const path = require('path')
module.exports = {
  target: 'server',
  head: {
    title: 'Autofarm - Automated Farming Done Right',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'The best cross‑chain Yield Aggregator across DeFi. Buy, stake and earn optimized yield on BNB, Cronos, Polygon, Avalanche, and many more chains.' },
      { name: 'description', content: 'The best cross‑chain Yield Aggregator across DeFi. Buy, stake and earn optimized yield on BNB, Cronos, Polygon, Avalanche, and many more chains.' },
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
    '@/plugins/svg-icon', //注册svg插件文件 
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
    vendor: ["axios"],
    extend(config, ctx) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.join(__dirname, 'assets/icons/svg')]
      //添加loader规则
      config.module.rules.push({
        test: /.svg$/, //匹配.svg
        include: [path.join(__dirname, 'assets/icons/svg')], //将存放svg的目录加入到loader处理目录
        use: [{ loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' } }]
      })
    }
  },
  telemetry: false,
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost只能用于本机访问，如果需要对外访问需要设置0.0.0.0
  },
  dev: process.env.NODE_ENV !== 'production',
}
