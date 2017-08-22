import React,{Component} from 'react';
import { View, Image, AsyncStorage, Alert } from 'react-native';
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
import Kehadiran from './components/Kehadiran';
import LaporanHarian from './components/Kehadiran/laporanHarian/LaporanHarian';
import Aktivitas from './components/Kehadiran/laporanHarian/Aktivitas';
import Remote from './components/Kehadiran/laporanHarian/Remote';
import Koreksi from './components/Kehadiran/laporanHarian/Koreksi';
import Dinas from './components/Kehadiran/laporanHarian/Dinas';
import Izin from './components/Kehadiran/laporanHarian/Izin';
import ClaimLembur from './components/Kehadiran/ClaimLembur';
import DetailPribadiCuti from './components/persetujuan/pribadi/Detail/Cuti/DetailPribadiCuti';
import DetailPribadiRemote from './components/persetujuan/pribadi/Detail/Remote/DetailPribadiRemote';
import DetailPribadiKoreksi from './components/persetujuan/pribadi/Detail/Koreksi/DetailPribadiKoreksi';
import DetailPribadiIzin from './components/persetujuan/pribadi/Detail/Izin/DetailPribadiIzin';
import DetailPribadiLembur from './components/persetujuan/pribadi/Detail/Lembur/DetailPribadiLembur';
import DetailPribadiLemburDriver from './components/persetujuan/pribadi/Detail/LemburDriver/DetailPribadiLemburDriver';
import DetailBawahanCuti from './components/persetujuan/Bawahan/Detail/Cuti/DetailBawahanCuti';
import DetailBawahanRemote from './components/persetujuan/Bawahan/Detail/Remote/DetailBawahanRemote';
import DetailBawahanKoreksi from './components/persetujuan/Bawahan/Detail/Koreksi/DetailBawahanKoreksi';
import DetailBawahanIzin from './components/persetujuan/Bawahan/Detail/Izin/DetailBawahanIzin';
import DetailBawahanLembur from './components/persetujuan/Bawahan/Detail/Lembur/DetailBawahanLembur';
import DetailBawahanLemburDriver from './components/persetujuan/Bawahan/Detail/LemburDriver/DetailBawahanLemburDriver';

import formPenugasanLembur from './components/formPenugasanLembur';
import formCuti from './components/formCuti';
import formSakit from './components/formPengajuanSakit';
import DetailKehadiran from './components/Kehadiran/DetailKehadiran' ;

import DateTimePickerTester from './components/cobacoba/DateTimePickerTester';
import TimePicker from './components/cobacoba/TimePicker';

import {Router, Scene} from 'react-native-router-flux';

import DetailLemburDriver from './components/lemburdriver/DetailLemburDriver';
import DetailLembur from './components/lembur/DetailLembur';
import DetailSPJ from './components/spj/DetailSPJ';
import DetailBawahan from './components/kinerja/DetailBawahan';
import DetailPribadi from './components/kinerja/DetailPribadi';
import AppKinerja from './components/AppKinerja';
import AppKinerjabawahan from './components/kinerja/TabBawahan';
import AppLemburDriver from './components/AppLemburDriver';
import AppLembur from './components/AppLembur';
import AppSPJ from './components/AppSPJ';
import AppPersetujuan from './components/AppPersetujuan';

class App extends Component{

    constructor(){
      super();
      this.state ={
        hasToken: false,
      }
    }


    compnentDidMount(){
      AsyncStorage.getItem('id_token').then((token) =>{
        if (token !== null){
          this.setState({
            hasToken: true,
          });
        } else{
          this.setState({
            hasToken: false,
          });
        }
      })
    }
    renderContent(){
        return (
            <Router>
              <Scene key="root" 
              navigationBarStyle={styles.navbarStyle}  
              titleStyle={{color : "#FFF"}}
                hideNavBar={true}>

                <Scene
                key="keylogin"
                component={LoginForm}
                initial={!this.state.hasToken}
                />
                
                <Scene
                key="keyMainMenu"
                component={MainMenu}
                initial={this.state.hasToken}
                title="Si-Akang"

                initial={this.state.hasToken}
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
                key="ClaimLembur"
                component={ClaimLembur}
                title="klaim Lembur"
                />
      
                <Scene
                  key = "keylaporanlemburdriver"
                  component = { AppLemburDriver }
                  title= "Laporan Lembur Driver"
                  
                />
                
                <Scene
                  key = "keylaporanlembur"
                  component = { AppLembur }
                  title= "Laporan Lembur"
                />

                <Scene
                    key = "keylaporanspj"
                    component = { AppSPJ }
                    title= "Laporan SPJ"
                    
                />

                <Scene
                    key = "keylaporankinerja"
                    component = { AppKinerja }
                    title= "Laporan Kinerja" 
                    
                />

                <Scene
                    key = "kinerjabawahan"
                    component = { AppKinerjabawahan }
                    title= "Laporan Kinerja" 
                    
                />

                <Scene
                    key = "keypersetujuan"
                    component = { AppPersetujuan }
                    title= "Persetujuan"                 
                />

                <Scene
                    key = "detaillemburdriver"
                    component = { DetailLemburDriver }
                    title= "Detail Laporan Lembur Driver"               
                />

                <Scene
                    key = "detaillembur"
                    component = { DetailLembur }
                    title= "Detail Laporan Lembur"               
                />

                <Scene
                    key = "detailpribadi"
                    component = { DetailPribadi }
                    title= "Detail Laporan Pribadi"    
                              
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
              <Scene
                key="keyPengajuanSakit"
                component={formSakit}
                title="Pengajuan Sakit"
                />
              <Scene
                key="keyDetailKehadiran"
                component={DetailKehadiran}
                title="Detail Kehadiran"
                />
                <Scene
                key="DetailPribadiCuti"
                component={DetailPribadiCuti}
                title="Detail persetujuan Pribadi Cuti"
                />
                <Scene
                key="DetailPribadiRemote"
                component={DetailPribadiRemote}
                title="Detail persetujuan Pribadi remote"
                />
                <Scene
                key="DetailPribadiKoreksi"
                component={DetailPribadiKoreksi}
                title="Detail persetujuan Pribadi koreksi"
                />
                <Scene
                key="DetailPribadiIzin"
                component={DetailPribadiIzin}
                title="Detail persetujuan Pribadi izin"
                />
                <Scene
                key="DetailPribadiLembur"
                component={DetailPribadiLembur}
                title="Detail persetujuan Pribadi lembur"
                />
                <Scene
                key="DetailPribadiLemburDriver"
                component={DetailPribadiLemburDriver}
                title="Detail persetujuan Pribadi lembur driver"
                />
                <Scene
                key="DetailBawahanCuti"
                component={DetailBawahanCuti}
                title="Detail persetujuan Bawahan Cuti"
                />
                <Scene
                key="DetailBawahanRemote"
                component={DetailBawahanRemote}
                title="Detail persetujuan Bawahan remote"
                />
                <Scene
                key="DetailBawahanKoreksi"
                component={DetailBawahanKoreksi}
                title="Detail persetujuan Bawahan koreksi"
                />
                <Scene
                key="DetailBawahanIzin"
                component={DetailBawahanIzin}
                title="Detail persetujuan Bawahan izin"
                />
                <Scene
                key="DetailBawahanLembur"
                component={DetailBawahanLembur}
                title="Detail persetujuan Bawahan lembur"
                />
                <Scene
                key="DetailBawahanLemburDriver"
                component={DetailBawahanLemburDriver}
                title="Detail persetujuan Bawahan lembur driver"
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