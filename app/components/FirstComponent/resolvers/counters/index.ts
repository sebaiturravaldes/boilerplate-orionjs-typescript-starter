import {paginatedResolver} from '@orion-js/paginated-mongodb'
import Counter from 'app/components/FirstComponent/models/Counter'
import Counters from 'app/components/FirstComponent/collections/Counters'

export default paginatedResolver({
  params: {},
  returns: Counter,
  async getCursor(params, viewer) {
    return Counters.find()
  }
})
