import {resolver} from '@orion-js/resolvers'

export default resolver({
  params: {},
  returns: String,
  async resolve(params, viewer) {
    return `Hello world ${viewer.email}`
  }
})
