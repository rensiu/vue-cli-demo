/**
 * @type { import('@vue/cli-service').ProjectOptions }
 */
const config = {
    publicPath: process.env.NODE_ENV === 'production' ? (process.env.VERCEL ? '/' : 'vue-cli-demo') : ''
}
module.exports = config