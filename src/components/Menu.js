import React,{Component} from 'react';
import { AsyncStorage,Alert, View, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Container, Text,Content, H1, Button, Icon, Col, Row, Grid} from 'native-base';
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux';
import FormLemburDriver from './FormLemburDriver';
import Kehadiran from './Kehadiran';
class Menu extends Component{

  render(){
    return (
    <Container style={styles.splashScreens}>
      <Content>
        <Grid style={{marginTop:50, marginBottom:30}}>
          <Col>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> Actions.keyKehadiran()}>
            <Image source={require('../img/kehadiran.png')} style={styles.iconStyle}/>
            <Text style={styles.textStyles}> KEHADIRAN </Text>
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> Actions.keyLemburDriver()}>
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

      </Content>
      
    </Container>
    );
  }
}

const styles ={
  splashScreens:{
    backgroundColor: 'white',
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
    marginTop: 25,
    color: '#3498db',
    fontWeight: 'bold'
  },
  buttonStyle:{
    backgroundColor:'#f4f4f4',
    width: 150,
    height: 150,
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

export default Menu;