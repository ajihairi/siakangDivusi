import React,{Component} from 'react';
import { AsyncStorage,Alert, View, Image, TouchableHighlight, TouchableOpacity, ScrollView} from 'react-native';
import { Container, Text,Content, H1, Button, Icon, Col, Row, Grid} from 'native-base';
import {Actions} from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from './login.action'
import TabBar from './_global/TabBar';
import appStyle from '../values/appStyle';

import FormLemburDriver from './FormLemburDriver';
import Kehadiran from './Kehadiran';
class Menu extends Component{

  componentDidMount(){

  }

  componentWillUnmount() {
  }


  goToLemburDriver() {
    this.props.navigator.push({
      screen: 'siakang.LemburDriver',
      title: 'Lembur Driver',
      animated: true,
      backButtonTitle: 'Back',
      navigatorStyle: appStyle.navigator2Style
    });
  }

  
  render(){
    return (
    <View style={styles.splashScreens}>
        <ScrollView>
        <Grid style={{marginTop:50, marginBottom:30}}>
          <Col>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> Actions.keyKehadiran()}>
            <Image source={require('../img/kehadiran.png')} style={styles.iconStyle}/>
            <Text style={styles.textStyles}> KEHADIRAN </Text>
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.goToLemburDriver.bind(this)}>
            <Image source={require('../img/lemburdriver.png')} style={styles.iconStyle}/>
            <Text style={styles.textStyles}> LEMBUR DRIVER </Text>
            </TouchableOpacity>
          </Col>
        </Grid>
        <Grid style={{marginBottom:30}}>
          <Col>
            <TouchableOpacity style={styles.buttonStyle} >
            <Image source={require('../img/perjalanan.png')} style={styles.iconStyle}/>
            <Text style={styles.textStyles}> PERJALANAN </Text>
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> Actions.keylaporankinerja()}>
            <Image source={require('../img/laporankinerja.png')} style={styles.iconStyle}/>
            <Text style={styles.textStyles}> LAPORAN KINERJA </Text>
            </TouchableOpacity>
          </Col>
        </Grid>
        <Grid style={{marginBottom:30}}>
          <Col>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> Actions.keylaporanspj()}>
            <Image source={require('../img/laporanspj.png')} style={styles.iconStyle}/>
            <Text style={styles.textStyles}> LAPORAN SPJ </Text>
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> Actions.keylaporanlemburdriver()}>
            <Image source={require('../img/laporanlemburdriver.png')} style={styles.iconStyle}/>
            <Text style={styles.textStyles}> Lap.LEMBUR DRIVER </Text>
            </TouchableOpacity>
          </Col>
        </Grid>
        <Grid style={{marginBottom:30}}>
          <Col>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>Actions.keylaporanlembur()}>
            <Image source={require('../img/laporanlembur.png')} style={styles.iconStyle} />
            <Text style={styles.textStyles}> LAPORAN LEMBUR</Text>
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> Actions.keypersetujuan()}>
            <Image source={require('../img/persetujuan.png')} style={styles.iconStyle}/>
            <Text style={styles.textStyles}> PERSETUJUAN </Text>
            </TouchableOpacity>
          </Col>
        </Grid>
        </ScrollView>
        <TabBar
        navigator={this.props.navigator}
        app={this.props.app}
      />
    </View>
    );
  }
}

const styles ={
  splashScreens:{
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft:20,
    paddingRight:20,
    flex: 1
  },
  buttonContainer:{
    flex: 1,
    width: 100,
    height:120,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconStyle:{
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  textStyles:{
    alignSelf:'center',
    textAlign:'center',
    width:100,
    fontSize: 12,
    marginTop: 10,
    color: '#3498db',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0)'
  },
  buttonStyle:{
    backgroundColor:'#f4f4f4',
    width: 130,
    height: 130,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    borderColor: '#eee',
    borderWidth: 0.5
  }

}

function mapStateToProps(state, ownProps) {
	return {
		username: state.authentications.username,
    password: state.authentications.password1,
    loading: state.authentications.loading,
    error: state.authentications.error,
    app: state.app
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(authActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
