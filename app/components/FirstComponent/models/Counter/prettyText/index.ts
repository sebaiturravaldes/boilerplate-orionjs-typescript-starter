import {modelResolver} from '@orion-js/resolvers'
import {Prop, TypedModel} from '@orion-js/typed-model'
import {Counter} from '..'

@TypedModel()
class Params {
  @Prop()
  uppercase: boolean
}

export default modelResolver({
  params: Params,
  returns: 'string',
  async resolve(counter: Counter, params: Params) {
    const text = `${counter.name}: ${counter.counter}`

    if (!params.uppercase) return text

    return text.toUpperCase()
  }
})
