import {UPDATE_PREFERENCES} from '../actions/index'

export default function(state = {}, action) {
 switch(action.type) {

     case UPDATE_PREFERENCES:
       if (action.payload.id === state.id) {
         return action.payload
       }
       break;
     default:
     return state
 }
}
