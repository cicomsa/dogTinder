
import {FETCHED_IMAGES_SUCCESS} from '../actions/index'

export default function (state = {}, action) {
	switch (action.type) {
		case FETCHED_IMAGES_SUCCESS:
			return action.payload

		default: return state
	}
}
