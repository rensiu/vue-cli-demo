/**
 * @type { import('@vue/cli-service').ProjectOptions }
 */
const config = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-cli-demo' : ''
}
module.exports = config