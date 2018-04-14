import * as request from 'superagent'
import {UPDATE_PREFERENCES} from './index'
const baseUrl = 'http://localhost:4001'

export const updatePreferences = (userId) => (dispatch) => {
   request
       .put(`${baseUrl}/users/${userId}`)
       .then(response => dispatch({
           type: UPDATE_PREFERENCES,
           payload: {}
       }))
       .catch(err => alert(err))
}
