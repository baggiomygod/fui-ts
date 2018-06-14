const proxtTarget = 'http://127.0.0.1:3000'

module.exports = {
  proxyTable: {
    '/restful': {
      target: proxtTarget,
      changeOrigin: true
    }
  }
}
