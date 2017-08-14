import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import { Button, Card, CardSection, Input, Spinner} from './common';
//import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import MainMenu from './MainMenu';

import {create} from 'apisauce'
const api = create({baseURL: 'https://www.makanbandung.com/api'})

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
  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  storeToken(responseData){
    AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }
  onLoginPressed() {
    this.setState({showProgress: true})
    api.post('https://www.makanbandung.com/api/login', {username: this.state.username, password: this.state.password})
    .then(response => {
      //handle success disini
      console.log(response)
      Actions.keyMainMenu();
    })
    .catch(error => {
      //handle error disni
      console.log(error)
    })
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
          onChangeText={ (text)=> this.setState({username: text}) }
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={ (text)=> this.setState({password: text}) }
            secureTextEntry
            placeholder="password"
            label="Password"
          />
        </CardSection>

        <CardSection>
        <Text style={styles.error}>
          {this.state.error}
        </Text>
          <Button onPress={this.onLoginPressed.bind(this)}>
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