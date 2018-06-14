import http from './http'

export default {
  getCars (params) {
    return http.$post('/restful/cjweb/screen/cars', {a:1}, {}, 6)
  }
}
