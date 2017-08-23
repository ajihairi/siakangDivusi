import * as types from '../values/actionTypes';
import initialState from '../reducers/initialState';

export default function (state = initialState.accounts, action) {
  switch (action.type) {

    case types.REQUEST_PROFILE:
      return {
        ...state,
        profileLoading: true,
        profile: null
      };

    case types.PROFILE_LOADED:
      return {
        ...state,
        profileLoading: false,
        profile: action.payload,
        immutableProfile: action.payload
      };

    case types.PROFILE_CHANGED:
      return {
        ...state,
        profile: action.payload
      };

    case types.REQUEST_FAQ:
      return {
        ...state,
        faqsLoading: true,
        profile: null
      };

    case types.FAQ_LOADED:
      return {
        ...state,
        faqsLoading: false,
        faqs: action.payload
      };

    default:
			return state;
  }
}
