import {route} from '@orion-js/http'
import Counters from 'app/components/FirstComponent/collections/Counters'
import getCounter from 'app/helpers/misc/getCounter'

export default route({
  path: '/hi',
  method: 'get',
  async resolve() {
    return {
      body: {
        jobRunCount: (await Counters.find({name: 'job'}).toArray())[0]?.counter,
        views: await getCounter('hi'),
        hello: 'world',
        counters: await Counters.find({}).toArray(),
        pretty: (
          await Promise.all(
            (
              await Counters.find({}).toArray()
            ).map(counter => counter.prettyText({uppercase: false}))
          )
        ).join(', ')
      }
    }
  }
})
