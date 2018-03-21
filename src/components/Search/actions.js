import {ActionTypes} from '../../core/constants'
import lypicService from '../../core/services/lypic'

export function search(query, searchType) {
  return async dispatch => {
    dispatch({
      type: ActionTypes.RESET_SEARCH
    })

    dispatch({
      type: ActionTypes.NEW_SEARCH_KEYWORD,
      payload: {query, searchType}
    })

    const tracks = await lypicService.search(query, searchType)

    dispatch({
      type: ActionTypes.SEARCH,
      payload: tracks
    })
  }
}
