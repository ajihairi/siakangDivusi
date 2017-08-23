/* eslint-disable arrow-body-style */
import {
    AsyncStorage,
    Alert
  } from 'react-native';
  import axios from 'axios';
  import { Navigation } from 'react-native-navigation';
  import * as types from '../values/actionTypes';
  import appStyle from '../values/appStyle';

  export const usernameChanged = (text) => {
    return {
      type: types.USERNAME_CHANGED,
      payload: text
    };
  };
  
  export const passwordChanged = (text) => {
    return {
      type: types.PASSWORD_CHANGED,
      payload: text
    };
  };
  
  
  const loginUserFail = (dispatch, error) => {
    Alert.alert('Authentication Failed', error);
    dispatch({
      type: types.LOGIN_USER_FAIL,
      payload: error
    });
  };

  
  const loginUserSuccess = (dispatch, token, username, userId) => {
    try {
      const userData = {
        token,
        username,
        userId
      };
      AsyncStorage.setItem('auth', JSON.stringify(userData));
  
      dispatch({ type: types.AUTH_RESET });
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'siakang.MainMenu',
          title: 'Siakang',
          navigatorStyle: appStyle.navigatorHomeStyle
        }
      });
    } catch (err) {
      loginUserFail(dispatch, 'An error occured with the request');
    }
  };
  
  export const checkUser = (navigator) => {
    return (dispatch) => {
      dispatch({ type: types.AUTH_PROCESSING });
      AsyncStorage.getItem('auth').then((value) => {
        if (value) {
          loginUserSuccess(dispatch, JSON.parse(value).token, JSON.parse(value).username, JSON.parse(value).userId);
        } else {
          dispatch({ type: types.AUTH_RESET });
          navigator.resetTo({
          screen: 'siakang.LoginForm',
          title: 'Siakang',
          animated: true,
          navigatorStyle: appStyle.clean
        });
        }
      }).done();
    };
  };
  
  export const loginUser = ({ username, password }) => {
    return (dispatch) => {
      dispatch({ type: types.AUTH_PROCESSING });
      axios.post('https://si-akang-dev.divusi.com/api/login', {
          username: username.toLowerCase(),
          password
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 300 && response.data.status === 200) {
          loginUserSuccess(dispatch, response.data.data.token.token, username, response.data.data.id);
        } else {
          loginUserFail(dispatch, response.data.message);
        }
      })
      .catch(() => {
        loginUserFail(dispatch, 'There\'s a problem with the server. Try again later');
      });
    };
  };
  
  //logout start
  export const logoutUser = (navigator) => {
    return (dispatch) => {
      AsyncStorage.removeItem('auth');
      dispatch({
        type: types.APP_TAB_CHANGED,
        payload: 'menu'
      });
      dispatch({ type: types.AUTH_RESET });
      navigator.resetTo({
        screen: 'siakang.LoginForm',
        title: 'Siakang',
        animated: true,
        navigatorStyle: appStyle.clean
      });
    };
  };
  //logout end
  
  
  