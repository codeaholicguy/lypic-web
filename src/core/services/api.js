import axios from 'axios'

import {API_URL} from '../../config'

export async function send({path, method = 'get', headers = {}, data, params}) {
  const requestObject = {
    url: `${API_URL}/${path}`,
    method,
    headers,
    data,
    params
  }

  const response = await axios(requestObject)

  return response
}

export default {
  send
}
