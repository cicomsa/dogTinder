import * as request from 'superagent'
import {FETCHED_IMAGES_SUCCESS} from './index'

const baseUrl = 'https://dog.ceo/api/breeds/image/random'

export const randomImage = (message) => (dispatch) => {
  request
    .get(`${baseUrl}`)
    .then(response => dispatch({
      type: FETCHED_IMAGES_SUCCESS,
      payload: response.body
    }))
    .catch(err => alert(err))
}
