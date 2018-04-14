import {FETCHED_DETAILED_USER} from '../actions/index'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCHED_DETAILED_USER:
      return action.payload
    default:
      return state
  }
}
