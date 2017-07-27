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

import DetailLemburDriver from './components/src/components/lemburdriver/DetailLemburDriver';
import DetailSPJ from './components/src/components/spj/DetailSPJ';
import DetailBawahan from './components/src/components/kinerja/DetailBawahan';
import AppKinerja from './components/AppKinerja';
import AppLemburDriver from './components/AppLemburDriver';
import AppSPJ from './components/AppSPJ';
import AppPersetujuan from './components/AppPersetujuan';

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
                initial
                />

                <Scene
                key="keylogin"
                component={LoginForm}
                
                />

                <Scene
                key="keyLemburDriver"
                component={FormLemburDriver}
                />

                <Scene
                key="keyGantiPassword"
                component={GantiPassword}
                />
<<<<<<< HEAD
=======
            
                <Scene
                key="keyKehadiran"
                component={Kehadiran}
                title="Kehadiran"
                />
                
                <Scene
                  key = "applemburdriver"
                  component = { AppLemburDriver }
                  title= "Laporan Lembur Driver"
                />
                
                <Scene
                    key = "appspj"
                    component = { AppSPJ }
                    title= "Laporan SPJ"
                    
                />

                <Scene
                    key = "kinerja"
                    component = { AppKinerja }
                    title= "Kinerja"       
                />

                <Scene
                    key = "persetujuan"
                    component = { AppPersetujuan }
                    title= "Persetujuan"                 
                />

                <Scene
                    key = "detaillemburdriver"
                    component = { DetailLemburDriver }
                    title= "Detail Lembur Driver"               
                />

                <Scene
                    key = "detailspj"
                    component = { DetailSPJ }
                    title= "Detail Laporan SPJ"               
                />

                <Scene
                    key = "detailbawahan"
                    component = { DetailBawahan }
                    title= "Detail Activitas Bawahan"               
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

>>>>>>> master
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
