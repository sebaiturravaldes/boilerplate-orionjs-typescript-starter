import components from 'app/components/http'
import home from './home'
import healthCheck from './healthCheck'
import {startServer, registerRoutes} from '@orion-js/http'

const routes = {
  ...components,
  home,
  healthCheck
}

registerRoutes(routes)
startServer()
