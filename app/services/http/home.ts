import {route} from '@orion-js/http'

export default route({
  path: '/',
  method: 'get',
  async resolve(req, res, viewer) {
    return {
      body: 'Hello world'
    }
  }
})
