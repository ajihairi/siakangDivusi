import React,{Component} from 'react';
import { View, Image, TouchableHighlight} from 'react-native';
import { Container, Text,Content, H1, Button, Icon, Col, Row, Grid} from 'native-base';
import firebase from 'firebase'

import {Actions} from 'react-native-router-flux';

import FormLemburDriver from './FormLemburDriver';
import Kehadiran from './Kehadiran';
const Menu =()=>{
  return(
    <Container style={styles.splashScreens}>

    <Content>


                <Grid style={{marginTop:50,marginBottom:70}}>
                  <Col>
                    <Container style={styles.buttonContainer}>
                        <Button primary transparent onPress={()=> Actions.keyKehadiran()} style={styles.buttonStyle}>
                          <Container style={styles.buttonContainer}>
                            <Image source={require('../img/jadwal.png')} style={styles.iconStyle}/>
                            <Text style={styles.textStyles}>Kehadiran</Text>
                          </Container>
                        </Button>
                    </Container>
                  </Col>
                  <Col>
                    <Container style={styles.buttonContainer}>
                        <Button primary transparent onPress={()=> Actions.keyLemburDriver()} style={styles.buttonStyle}>
                          <Container style={styles.buttonContainer}>
                            <Image source={require('../img/lemburdriver.png')} style={styles.iconStyle}/>
                            <Text style={styles.textStyles}>Lembur Driver</Text>
                          </Container>
                        </Button>
                    </Container>
                  </Col>
                  <Col>
                    <Container style={styles.buttonContainer} >
                        <Button primary transparent style={styles.buttonStyle}>
                          <Container style={styles.buttonContainer} >
                            <Image source={require('../img/perjalanan.png')} style={styles.iconStyle}/>
                            <Text style={styles.textStyles}>Perjalanan</Text>
                          </Container>
                        </Button>
                    </Container>
                  </Col>
                </Grid>

                <Grid style={{marginBottom:70}}>
                  <Col>
                    <Container style={styles.buttonContainer}>
                        <Button primary transparent onPress={()=> Actions.kinerja()} style={styles.buttonStyle}>
                          <Container style={styles.buttonContainer}>
                            <Image source={require('../img/laporankinerja.png')} style={styles.iconStyle}/>
                            <Text style={styles.textStyles}> Laporan Kinerja </Text>
                          </Container>
                        </Button>
                    </Container>
                  </Col>
                  <Col>
                    <Container style={styles.buttonContainer}>
                        <Button primary transparent onPress={()=> Actions.appspj()} style={styles.buttonStyle}>
                          <Container style={styles.buttonContainer}>
                            <Image source={require('../img/laporanspj.png')} style={styles.iconStyle}/>
                            <Text style={styles.textStyles}> Laporan SPJ </Text>
                          </Container>
                        </Button>
                    </Container>
                  </Col>
                  <Col>
                    <Container style={styles.buttonContainer}>
                        <Button primary transparent onPress={()=> Actions.applemburdriver()} style={styles.buttonStyle}>
                          <Container style={styles.buttonContainer}>
                            <Image source={require('../img/lapranlemburdriver.png')} style={styles.iconStyle}/>
                            <Text style={styles.textStyles}> Laporan Lembur Driver </Text>
                          </Container>
                        </Button>
                    </Container>
                  </Col>
                </Grid>

                <Grid style={{marginBottom:70}}>
                  <Col>
                    <Container style={styles.buttonContainer}>
                        <Button primary transparent onPress={()=> Actions.applembur()} style={styles.buttonStyle}>
                          <Container style={styles.buttonContainer}>
                            <Image source={require('../img/laporanlembur.png')} style={styles.iconStyle}/>
                            <Text style={styles.textStyles}> Laporan Lembur </Text>
                          </Container>
                        </Button>
                    </Container>
                  </Col>
                  <Col>
                    <Container style={styles.buttonContainer}>
                        <Button primary transparent onPress={()=> Actions.persetujuan()} style={styles.buttonStyle}>
                          <Container style={styles.buttonContainer}>
                            <Image source={require('../img/persetujuan.png')} style={styles.iconStyle}/>
                            <Text style={styles.textStyles}>Persetujuan</Text>
                          </Container>
                        </Button>
                    </Container>
                  </Col>
                  <Col>
                    <Container style={styles.buttonContainer}>
                        <Button primary transparent style={styles.buttonStyle}>
                          <Container style={styles.buttonContainer}>
                            <Image source={require('../img/logout.png')} style={styles.iconStyle}/>
                            <Text style={styles.textStyles}> Log Out </Text>
                          </Container>
                        </Button>
                    </Container>
                  </Col>
                </Grid>
    </Content>
    </Container>

  );
}

const styles ={
  splashScreens:{
    backgroundColor: 'white',
    paddingLeft:30,
    paddingRight:30,
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
    width: 110,
    height: 110
  },
  textStyles:{
    alignSelf:'center',
    textAlign:'center',
    width:100,
    fontSize: 12
  },
  buttonStyle:{
    alignItems: 'flex-start',
    height: 230
  }

}

export default Menu;