import {getViewer} from '@packages/orionjs-justo'

/**
 * Returns the viewer using the shared get viewer method
 */
export default async function (params) {
  const viewer = await getViewer(params)
  return viewer
}
