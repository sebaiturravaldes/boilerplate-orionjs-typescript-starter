import getViewer from './getViewer'
import {corsOptions} from '@packages/orionjs-justo'
import {getApp, setGetViewer} from '@orion-js/http'
import cors from 'cors'

setGetViewer(getViewer)

getApp().use(cors(corsOptions))
