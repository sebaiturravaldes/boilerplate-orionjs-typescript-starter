import {getModelForClass, Prop, ResolverProp, TypedModel} from '@orion-js/typed-model'
import prettyText from './prettyText'

@TypedModel()
export class Counter {
  /**
   * The name of the counter
   */
  @Prop()
  name: string

  /**
   * The current value of the counter
   */
  @Prop()
  counter: number

  /**
   * A texts returning the counter and the name
   */
  @ResolverProp(prettyText)
  prettyText: typeof prettyText.modelResolve
}

export default getModelForClass(Counter)
