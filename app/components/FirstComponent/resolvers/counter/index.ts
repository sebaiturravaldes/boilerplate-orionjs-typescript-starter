import {resolver} from '@orion-js/resolvers'
import Counter from 'app/components/FirstComponent/models/Counter'
import Counters from 'app/components/FirstComponent/collections/Counters'

export default resolver({
  params: {},
  returns: Counter,
  async resolve(params, viewer) {
    return Counters.findOne({})
  }
})
