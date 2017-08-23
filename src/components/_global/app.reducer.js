import * as types from '../../values/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.app, action) {
	switch (action.type) {

		case types.APP_TAB_CHANGED:
			return { ...state, tab: action.payload };
    
		default:
			return state;
	}
}
