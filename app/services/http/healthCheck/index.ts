import {route} from '@orion-js/http'

export default route({
  path: '/health-check',
  method: 'get',
  async resolve(req, res, viewer) {
    return {
      body: 'ok'
    }
  }
})
