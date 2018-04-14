import * as request from 'superagent'
import {FETCHED_DETAILED_USER} from './index'
const baseUrl = 'http://localhost:4001'

export const fetchUser = (userId) => (dispatch) => {
  request
    .get(`${baseUrl}/users/${userId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_USER,
      payload: response.body
    }))
    .catch(err => console.log(err))
}
