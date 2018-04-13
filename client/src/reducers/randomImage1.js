
import {FETCHED_IMAGES} from '../actions/index'

export default function (state = [], action) {
	switch (action.type) {

		case FETCHED_IMAGES:

			return state.concat(action.payload)

		default: return state
	}
}
