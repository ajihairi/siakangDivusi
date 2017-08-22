import React, { Component } from 'react';
import {Text, View, Alert, Image, AsyncStorage, KeyboardAvoidingView,} from 'react-native';
import {Spinner,  CardSection, Card,} from './common';
import {Input, Icon, Button} from 'native-base';
//import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import MainMenu from './MainMenu';
import Wallpaper from './LoginForm/Wallpaper'
import {create} from 'apisauce'

const ACCESS_TOKEN = 'access_token';
class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
      showProgress: false,
    }
  }
  async onValueChange (item, SelectedValue){
    try {
      await AsyncStorages.setItem(item, SelectedValue);

    } catch (error){
      console.log('AsyncStorage Error : ' +error.message);
    }
  }
  userLogin(){
    if (this.state.username && this.state.password){
      fetch("https://si-akang-dev.divusi.com/api/login", {
      method: "POST",
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseData) =>{
      this.onValueChange('id_token', responseData.id_token),
      Actions.keyMainMenu();
    })
    .done();
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
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        </CardSection>

        <CardSection>
        <Icon Active name='key' style={{color: 'rgba(41, 128, 185,1.0)', marginRight: 5}}/>
          <Input
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder="password"
          />
        </CardSection>
      </Card>
        <Text style={styles.errorTextStyle}>
        {this.state.error}
       </Text>
          <Button block primary onPress={this.userLogin.bind(this)} style={{marginLeft: 5, marginRight: 5}}>
            <Text style={{color: 'white', fontSize: 16}}>Log In</Text>
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
 export default LoginForm;
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