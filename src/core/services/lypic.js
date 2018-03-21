import {send} from './api'

export async function search(query, type) {
  try {
    const response = await send({
      path: 'search',
      method: 'get',
      params: {q: query, type}
    })

    return response.data
  } catch (err) {
    throw new Error('Cannot search', err.message)
  }
}

export async function getTrack(id) {
  try {
    const response = await send({
      path: `tracks/${id}`,
      method: 'get'
    })

    return response.data
  } catch (err) {
    throw new Error('Cannot get track', err.message)
  }
}

export default {
  search,
  getTrack
}
