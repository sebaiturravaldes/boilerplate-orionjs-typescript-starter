import {startServer, registerRoutes} from '@orion-js/http'
import components from 'app/components/http'
import home from './home'

const routes = {
  ...components,
  home
}

registerRoutes(routes)
startServer()
