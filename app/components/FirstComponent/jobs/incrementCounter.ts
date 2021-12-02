import {job} from '@orion-js/jobs'
import Counters from '../collections/Counters'

export default job({
  type: 'recurrent',
  runEvery: '1 minute',
  run: async () => {
    await Counters.findOneAndUpdate(
      {name: 'job'},
      {$inc: {counter: 1}},
      {
        mongoOptions: {
          upsert: true
        }
      }
    )
  }
})
