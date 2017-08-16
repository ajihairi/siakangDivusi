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



------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------  ------------------------  ------------------------
------------------------------------------------------------------------------------------------------------

 'use strict';
import React, { Component } from 'react';
import {
  Text, 
  View, 
  Image,
  AsyncStorage
} from 'react-native';
import { Button, Card, CardSection, Input, Spinner} from './common';'
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
    api.post('/login', {username: 'this.state.username', password: 'this.state.password'})
    .then(response => {
      //handle success disini
      console.log(response)
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




------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------  ------------------------  ------------------------
------------------------------------------------------------------------------------------------------------

'use strict';
import React, { Component } from 'react';
import {
  Text, 
  View, 
  Image,
  ActivityIndicatorIOS,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import { Button, Card, CardSection, Input, Spinner} from './common';
//import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import MainMenu from './MainMenu';

import {create} from 'apisauce'
//const api = create({baseURL: 'https://www.makanbandung.com/api'})

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
  async onLoginPressed() {
    this.setState({showProgress: true})
    try {
      let response = await fetch('https://www.makanbandung.com/api/login', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                session:{
                                  username: this.state.username,
                                  password: this.state.password,
                                }
                              })
                            });
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
          //Handle success
          let accessToken = res;
          console.log(accessToken);
          //On success we will store the access_token in the AsyncStorage
          this.storeToken(accessToken);
      } else {
          //Handle error
          let error = res;
          throw error;
      }
    } catch(error) {
        this.setState({error: error});
        console.log("error " + error);
        this.setState({showProgress: false});
    }
  }
    render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
      <View>
        <Image source={require('../img/siakang.png')} style={styles.imgStyle} />
        <Text style={{alignSelf:'center', color:'#08A8D4'}}> Silahkan Masuk </Text>
        <KeyboardAvoidingView>
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

          <Text style={styles.error}>
            {this.state.error}
          </Text>

        <CardSection>
          <Button onPress={this.onLoginPressed.bind(this)}>
            <Text>Log In</Text>
          </Button>
        </CardSection>
      </Card>
      </KeyboardAvoidingView>
      <Text style={styles.copyStyle}> Copyright (c) PT LAPI DIVUSI 2017 </Text>      
      </View>
      </KeyboardAvoidingView>
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
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'center',
    color: '#08A8E2'
  },
  error: {
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
};
 export default LoginForm;

 import React, { Component } from 'react';
 import {Text, View, Image, AsyncStorages} from 'react-native';
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


