import * as types from '../../values/actionTypes';

export const tabChanged = (tab) => {
  return {
    type: types.APP_TAB_CHANGED,
    payload: tab
  };
};
