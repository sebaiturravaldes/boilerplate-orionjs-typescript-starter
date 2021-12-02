import {createCollection} from '@orion-js/mongodb'
import {Prop, TypedModel} from '@orion-js/typed-model'

@TypedModel()
class Counter {
  @Prop()
  name: string

  @Prop()
  counter: number
}

const Counters = createCollection<Counter>({
  name: 'helpers.autoincrement_counters',
  model: Counter,
  indexes: [
    {
      keys: {name: 1},
      options: {unique: true}
    }
  ]
})

export default async function getCounter(name: string): Promise<string> {
  const result = await Counters.findOneAndUpdate(
    {name},
    {$inc: {counter: 1}},
    {
      mongoOptions: {
        upsert: true
      }
    }
  )

  if (!result) return '1'
  return `${result.counter + 1}`
}
