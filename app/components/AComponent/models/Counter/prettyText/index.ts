import {modelResolver, resolver} from '@orion-js/resolvers'
import {getModelForClass, Prop, TypedModel} from '@orion-js/typed-model'
import Counter from '..'

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
