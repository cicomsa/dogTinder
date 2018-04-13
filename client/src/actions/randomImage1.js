import * as request from 'superagent'
import {FETCHED_IMAGES} from './index'

const baseUrl = 'https://dog.ceo/api/breeds/image/random'

export const randomImage1 = (message) => (dispatch) => {
  request
    .get(`${baseUrl}`)
    .then(response => dispatch({
      type: FETCHED_IMAGES,
      payload: response.body.message
    }))
    .catch(err => console.log(err))
}
