import {startGraphQL} from '@orion-js/graphql'
import resolvers from 'app/components/resolvers'

startGraphQL({
  resolvers,
  useGraphiql: !!process.env.ORION_DEV
})
