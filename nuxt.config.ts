// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  image: {
    // デフォルトプロバイダーを指定（例: 静的ファイル）
    provider: 'static',
    providers: {
      static: {
        // 静的ファイルを指すディレクトリ
        baseURL: '/images',
      }
    }
  }
})
