import {resolver} from '@orion-js/resolvers'

export default resolver({
  params: {},
  returns: String,
  mutation: true,
  async resolve(params, viewer) {
    return 'mutated'
  }
})
