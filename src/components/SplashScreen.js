import React,{Component} from 'react';
import { View, Image, Text} from 'react-native';
import { Container, Content, H1} from 'native-base';

const SplashScreen =()=>{
  return(
    <Container style={styles.splashScreens}>

        <Image source={require('../img/siakang.png')} style={styles.imgStyle} />

    </Container>

  );
}

const styles ={
  splashScreens:{
    backgroundColor: '#08A8E2',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyles:{
    fontStyle: 'italic'
  },
  imgStyle:{
    width: 355.2,
    height:222.8
  }
}

export default SplashScreen;
