/* Copyright (C) PT. LAPI Divusi - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Krisna Fathurahman <krisna.fathurahman@gmail.com>, December 2016
 */
// Export all page screen across application
/* Legacy Code */
// export * from './MyVoucher/RedeemPage';
// export * from './MyAccount/MyProfilePage';
// export * from './MyAccount/FaqPage';
// export * from './MyAccount/TnCPage';

/* eslint-disable import/prefer-default-export */
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
import appStyle from './values/appStyle';
import SplashScreen from './components/SplashScreen';
import Menu from './components/Menu';
import Profile from './components/Profile';

import { Navigation } from 'react-native-navigation';
import {Icon} from 'native-base';


export function registerScreens(store, Provider) {
  Navigation.registerComponent('siakang.SplashScreen', () => SplashScreen, store, Provider);
  Navigation.registerComponent('siakang.LoginForm', () => LoginForm, store, Provider);
  Navigation.registerComponent('siakang.Menu', () => Menu,store,Provider);
  Navigation.registerComponent('siakang.Profile', () => Profile,store,Provider);
  Navigation.registerComponent('siakang.LemburDriver', () => LemburDriver, store, Provider);
  Navigation.registerComponent('siakang.GantiPassword', () => GantiPassword, store, Provider);
  Navigation.registerComponent('siakang.Menu', () => Menu, store, Provider);
  Navigation.registerComponent('siakang.Profile', () => Profile, store, Provider);
  Navigation.registerComponent('siakang.MainMenu', () => MainMenu, store, Provider);
  Navigation.registerComponent('siakang.GantiPassword', () => GantiPassword, store, Provider);


}
