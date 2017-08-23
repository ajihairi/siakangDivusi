import React, { Component } from 'react';
import {Text, View, Alert, Image, AsyncStorage, KeyboardAvoidingView,} from 'react-native';
import {Spinner,  CardSection, Card,} from './common';
import {Input, Icon, Button} from 'native-base';
//import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import MainMenu from './MainMenu';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wallpaper from './LoginForm/Wallpaper';
import * as authActions from './login.action';
import {Navigation} from 'react-native-navigation';

class LoginForm extends Component {

  onUsernameChange(text){
    this.props.actions.usernameChanged(text);
  }
  onPasswordChange(text) {
    this.props.actions.passwordChanged(text);
  }

  onButtonPress() {
    const { username, password } = this.props;
    if (username && password) {
      this.props.actions.loginUser({ username, password });
    } else if (!username) {
      Alert.alert('Authentication Failed', 'Username required');
    } else if (!password) {
      Alert.alert('Authentication Failed', 'Password required');
    }
  }

  render(){
    return(
      <Wallpaper>
        <Image source={require('../img/siakang3.png')} style={styles.imgStyle} />
        <KeyboardAvoidingView behavior='padding'
				style={styles.container}>
        <Text style={{alignSelf:'center',fontWeight: '400', fontSize: 16, color:'#ecf0f1', backgroundColor: 'transparent'}}> 
          Silahkan Masuk </Text>
        <Card>
        <CardSection>
          <Icon Active name='person' style={{color: 'rgba(41, 128, 185,1.0)', marginRight: 5}}/>
          <Input
          placeholder="username"
          onChangeText={this.onUsernameChange.bind(this)}
          value={this.props.username}
          />
        </CardSection>

        <CardSection>
        <Icon Active name='key' style={{color: 'rgba(41, 128, 185,1.0)', marginRight: 5}}/>
          <Input
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
            secureTextEntry={true}
            placeholder="password"
          />
        </CardSection>
      </Card>
          <Button block primary 
          onPress={this.onButtonPress.bind(this)}
          disabled={this.props.loading}
          style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>
            <Text style={{color: 'white', fontSize: 16}}> Log In </Text>
          </Button>
        </KeyboardAvoidingView>
      </Wallpaper>
    );
  }
}

const styles ={
  
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  imgStyle:{
    width: 250,
    height:250,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  copyStyle:{
    marginTop:200,
    alignSelf: 'center',
    color: '#08A8E2'
  }
};

function mapStateToProps(state, ownProps) {
	return {
		username: state.authentications.username,
    password: state.authentications.password,
    loading: state.authentications.loading,
    error: state.authentications.error
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(authActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
 /*0.7 : semakin kecil semakin transparan */ 
 /* <View style={styles.shapeStyle}>
 <Input
 onChangeText={(password) => this.setState({password})}
 value={this.state.password}
 secureTextEntry={true}
 placeholder="password"
 label="Password"
/>
</View>*/