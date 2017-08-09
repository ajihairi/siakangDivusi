'use strict';
import React, { Component } from 'react';
import {
  Text, 
  View, 
  Image,
  AsyncStorage
} from 'react-native';
import { Button, Card, CardSection, Input, Spinner} from './common';
//import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import MainMenu from './MainMenu';
import {create} from 'apisauce';


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
  /*redirect(routeName, accessToken){
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
    }*/
    onLoginPressed() {

      console.log(this.state);
      this.setState({showProgress: true})
      fetch("https://www.makanbandung.com/api/login", {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        body: "username=ivannugraha&password=ivan123" // <-- Post parameters
      })
      .then((response) => {
        console.log(response)
      })
      .done()

      // api.post('/login', {username: 'this.state.username', password: 'this.state.password'})
      // .then(response => {
      //   //handle success disini
      //   console.log(response.body)
      // })
      // .catch(error => {
      //   //handle error disni
      //   console.log('error bos')
      //   console.log(error)
      // })
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
          onChangeText={ (text)=> this.setState({username: text}) }/>
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
          onChangeText={ (text)=> this.setState({password: text}) }
          />
        </CardSection>

        <CardSection>
        <Text style={styles.error}>

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
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
};
 export default LoginForm;
