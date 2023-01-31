// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  builder: 'webpack',
  webpack: {
    resolve: {
      extensions: [
        ".js",
        ".vue",
        ".mjs"
      ]
    }
  },
  extensions: [
    ".js",
    ".vue",
    ".mjs"
  ],
  watchers: {
    chokidar: {
      usePolling: true,
      poll: 1000
    },
    webpack: {
      poll: 1000
    }
  }
});
