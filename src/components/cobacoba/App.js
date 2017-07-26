import React,{Component} from 'react';
import { View, Image } from 'react-native';
import {
  Container,
  Content,
  H1
} from 'native-base';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';
import SplashScreen from './components/SplashScreen';
import {
  Header,
  Button,
  Spinner,
  CardSection
} from './components/common';
import MainMenu from './components/MainMenu';
import GantiPassword from './components/GantiPassword';
import FormLemburDriver from './components/FormLemburDriver';
import DateTimePickerTester from './components/cobacoba/DateTimePickerTester';
import TimePicker from './components/cobacoba/TimePicker'

import {Router, Scene} from 'react-native-router-flux';

class App extends Component{
  state={loggedIn: null}

  componentWillMount(){
      firebase.initializeApp({
      apiKey: "AIzaSyA6qAEhvX6cAKC8zzDAbDoO3a0szMyvMpA",
      authDomain: "auth-388dd.firebaseapp.com",
      databaseURL: "https://auth-388dd.firebaseio.com",
      projectId: "auth-388dd",
      storageBucket: "auth-388dd.appspot.com",
      messagingSenderId: "388673715373"
    });

    firebase.auth().onAuthStateChanged((user) =>{
      if (user){
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({loggedIn: false });
      }
    });
  }


  renderContent(){
      switch (this.state.loggedIn) {
      case true:
        return (
            <Router>
              <Scene key="root" 
              navigationBarStyle={styles.navbarStyle}  
              titleStyle={{color : "#FFF"}}
                hideNavBar={true}>
              
                <Scene
                key="mainmenu"
                component={MainMenu}
                title="Si-Akang"
                />

                <Scene
                key="keyLemburDriver"
                component={FormLemburDriver}
                title="Lembur Driver"
                />

                <Scene
                key="keyGantiPassword"
                component={GantiPassword}
                title="Ganti Password LDAP"
                />
              
              </Scene>
            </Router>
        );
      case false:
        return <LoginForm />;
      default:
        return (<View style={styles.spinnerPosition}>
                    <Spinner size="large" />
                  </View>);
    }
  }

  render(){
    return(
      <Container>
        {this.renderContent()}
        </Container>
    );
  }
}

const styles={
    spinnerPosition:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 200
  },
 navbarStyle:{
  backgroundColor: 'blue'
 }
};


export default App;
