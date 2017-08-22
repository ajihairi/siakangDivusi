import React, { Component } from 'react';
import {Text, View, Alert, Image, AsyncStorage} from 'react-native';
import {Spinner,  CardSection} from './common';
import { Button, Card, Input} from 'native-base';
//import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import MainMenu from './MainMenu';

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
      Alert.alert(
        'Login Success!'
      ),
      Actions.keyMainMenu();
    })
    .done();
    }
  }

  
  render(){
    return(

      <View>
        <Image source={require('../img/siakang.png')} style={styles.imgStyle} />
        <Text style={{alignSelf:'center', color:'#08A8D4'}}> Silahkan Masuk </Text>
      <Card>
        <CardSection>
          <Input
          placeholder="username"
          label="Username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder="password"
            label="Password"
          />
        </CardSection>

        <CardSection>
        <Text style={styles.errorTextStyle}>
        {this.state.error}
       </Text>
          <Button onPress={this.userLogin.bind(this)}>
            <Text>Log In</Text>
          </Button>
        </CardSection>
      </Card>
      <Text style={styles.copyStyle}> Copyright (c) PT LAPI DIVUSI 2017 </Text>
      </View>
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
    width: 355.2,
    height:222.8
  },
  copyStyle:{
    marginTop:200,
    alignSelf: 'center',
    color: '#08A8E2'
  }
};
 export default LoginForm;