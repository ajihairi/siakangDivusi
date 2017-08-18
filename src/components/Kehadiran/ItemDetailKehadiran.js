import React, { Component } from 'react';
import { 
    Container, 
    Content, 
    Form, 
    Item, 
    Input, 
    Text,
    Button,
    List,Header,Left,Icon,Body,Title
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {View} from 'react-native'

export default class ItemDetailKehadiran extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected1: "key1",
          selected2: "keyb"
        };
      }
    render() {
       const {
           hari,
           tanggal,
           jamMasuk,
           jamKeluar,
           totalJam,
           overtimeStatus,
           status
        } = this.props.library;
        

          return (
            <Container>
                 <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Kehadiran</Title>
            </Body></Header>
                <Content>
                <View>
                <Form style={{ marginLeft: 10 }}>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Hari</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {hari}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Tanggal</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {tanggal}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jam Masuk</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jamMasuk}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jam Keluar</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jamKeluar}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Total Jam</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {totalJam}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                        <View>
                            <View>
                                <Text>Status Kehadiran</Text>
                            </View>
                            <View>
                                <Text style={{marginLeft: 200, marginTop:-23}}>: {status}</Text>
                            </View>
                        </View>
                    </View>
                </Form>
                     {(overtimeStatus===null) ?(
                         <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 5,  alignItems: 'center', justifyContent: 'center'}}><Button  
                    style={{width:150, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginRight: 5,
                    backgroundColor:'orange'}}
                    
          

                      onPress={() => Actions.keyLaporanHarian()}>
                      <Text style={{textAlign: 'center'}}> Laporan Harian </Text>
                    </Button></View>) : (<View style={{flexDirection: 'row', marginTop: 30, marginBottom: 5,  alignItems: 'center', justifyContent: 'center'}}><Button  
                    style={{width:150, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginRight: 5}}
                      onPress={() => Actions.keyLaporanHarian()}>
                      <Text style={{textAlign: 'center'}}> Laporan Harian </Text>
                    </Button><Button onPress={() => Actions.ClaimLembur()} success style={{width:150, justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
                      <Text style={{textAlign: 'center'}}> Claim Lembur </Text>
                    </Button></View>)}                    
                    </View>
                </Content>
            </Container>
        );

}}