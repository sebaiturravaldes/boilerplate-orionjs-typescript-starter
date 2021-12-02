import {startServer, registerRoutes} from '@orion-js/http'
import components from 'app/components/http'
import home from './home'
import healthCheck from './healthCheck'

const routes = {
  ...components,
  home,
  healthCheck
}

registerRoutes(routes)
startServer()
