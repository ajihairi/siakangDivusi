import * as types from '../values/actionTypes';
import initialState from '../reducers/initialState';

export default function (state = initialState.authentications, action) {
	switch (action.type) {

		case types.USERNAME_CHANGED:
			return { ...state, username: action.payload };

		case types.PASSWORD_CHANGED:
			return { ...state, password: action.payload };

		case types.AUTH_PROCESSING:
			return {
				...state,
        loading: true,
        error: ''
			};

		case types.AUTH_RESET:
			return {
				...state,
        ...initialState.authentications
			};
    
    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        password: '',
        loading: false
      };
    
   
    
		default:
			return state;
	}
}
