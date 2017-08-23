/* eslint-disable arrow-body-style */
import {
    AsyncStorage,
    Alert
  } from 'react-native';
  import axios from 'axios';
  import * as types from '../values/actionTypes';
  import appStyle from '../values/appStyle';
  import 
  
  export const goToLemburDriver = (navigator) => {
    return () => {
      navigator.push({
        screen: 'siakang.LemburDriver',
        title: 'Lembur Driver',
        animated: false,
        backButtonTitle: 'Back',
        navigatorStyle: appStyle.navigator2Style
      });
    };
  };

  
  