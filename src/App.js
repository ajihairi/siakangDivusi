import React,{Component} from 'react';
import { View, Image } from 'react-native';
import {
  Container,
  Content,
  H1
} from 'native-base';
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
import LoginForm from './components/LoginForm';
import Kehadiran from './components/Kehadiran/Kehadiran';
import LaporanHarian from './components/Kehadiran/laporanHarian/LaporanHarian';
import formPenugasanLembur from './components/formPenugasanLembur';
import formCuti from './components/formCuti';


import DateTimePickerTester from './components/cobacoba/DateTimePickerTester';
import TimePicker from './components/cobacoba/TimePicker';

import {Router, Scene} from 'react-native-router-flux';

class App extends Component{


  renderContent(){
        return (
            <Router>
              <Scene key="root" 
              navigationBarStyle={styles.navbarStyle}  
              titleStyle={{color : "#FFF"}}
                hideNavBar={true}>
              
                <Scene
                key="keyMainMenu"
                component={MainMenu}
                title="Si-Akang"
                />

                <Scene
                key="keylogin"
                component={LoginForm}
                initial
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
            
                <Scene
                key="keyKehadiran"
                component={Kehadiran}
                title="Kehadiran"
                />

                <Scene
                key="keyLaporanHarian"
                component={LaporanHarian}
                title="Laporan Harian"
                />

                <Scene
                key="keyPenugasanLembur"
                component={formPenugasanLembur}
                title="Penugasan Lembur"
                />

                <Scene
                key="keyPengajuanCuti"
                component={formCuti}
                title="Pengajuan Cuti"
                />

              </Scene>
            </Router>
        );
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
