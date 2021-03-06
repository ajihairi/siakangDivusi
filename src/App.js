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

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { registerScreens } from './Screens';
import appStyle from './values/appStyle';
import {Navigation} from 'react-native-navigation';


const store = configureStore();
registerScreens(store, Provider);

class App extends Component{

  constructor(props) {
		super(props);
		this.startApp();
	}

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'siakang.Menu',
        title: 'Siakang',
        navigatorStyle: appStyle.clean
      }
    });
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