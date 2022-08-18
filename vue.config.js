const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/legends_game/',
  outputDir: process.env.NODE_ENV === 'production' ? __dirname+'/dist' : __dirname+'/dist',
  // css: {
  //   extract: true,
  // } 
})
