import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import { Button, Card, CardSection, Input, Spinner} from './common';
//import LinearGradient from 'react-native-linear-gradient';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false } ;

  onButtonPress(){
      const{ email, password } = this.state;

      this.setState({error:'', loading: true });

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
          });
        }

        onLoginSuccess(){
              this.setState({
              email: '',
              password: '',
              loading: false,
              error: ''
          });
        }

  onLoginFail(){
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  renderButton(){
    if (this.state.loading){
      return <Spinner size="small" />;
    }

    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
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
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
        {this.state.error}
        </Text>

        <CardSection>
        {this.renderButton()}
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
