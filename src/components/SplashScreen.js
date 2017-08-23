import React,{Component} from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import { Container, Content, H1} from 'native-base';
import {Actions} from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from './login.action';

const wWidth = Dimensions.get('window').width;

class SplashScreen extends Component{
  
  componentDidMount() {
    setTimeout(() => {
      this.props.actions.checkUser(this.props.navigator);
    }, 1500);
  }

  

render(){
  return(
    <Container style={styles.splashScreens}>

        <Image source={require('../img/siakang3.png')} style={styles.imgStyle} />

    </Container>

  );
}
}

const styles ={
  splashScreens:{
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyles:{
    fontStyle: 'italic'
  },
  imgStyle:{
    width: 150,
    height:150,
    resizeMode: 'contain'
  }
}

function mapStateToProps(state, ownProps) {
	return {
    loading: state.authentications.loading
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(authActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

