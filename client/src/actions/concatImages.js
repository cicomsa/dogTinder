import * as request from 'superagent'
import {CONCAT_IMAGES} from './index'

const baseUrl = 'https://dog.ceo/api/breeds/image/random'

export const concatImages = (message) => (dispatch) => {
  request
    .get(`${baseUrl}`)
    .then(response => dispatch({
      type: CONCAT_IMAGES,
      payload: response.body.message
    }))
    .catch(err => console.log(err))
}
