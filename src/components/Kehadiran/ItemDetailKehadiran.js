import React, { Component } from 'react';
import { 
    Container, 
    Content, 
    Form, 
    Item, 
    Input, 
    Label, 
    Text,
    Button,
    List
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {View} from 'react-native'

export default class ItemDetailKehadiran extends Component {
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
                <Content>
                    <Form style={{marginTop: 30}}>
                        <Item stackedLabel>
                            <Label>Hari</Label>
                            <Text>{hari} </Text>
                           </Item>
                        <Item stackedLabel>
                            <Label>tanggal</Label>
                            <Text>{tanggal} </Text>
                           </Item>
                        <Item stackedLabel>
                            <Label>jam masuk</Label>
                            <Text>{jamMasuk} </Text>
                           </Item>
                        <Item stackedLabel>
                            <Label>jam keluar</Label>
                            <Text>{jamKeluar} </Text>
                           
                        </Item>
                        <Item stackedLabel>
                            <Label>total jam kerja</Label>
                           <Text>{totalJam} </Text>
                           
                        </Item>
                    <Item stackedLabel>
                            <Label>status</Label>
                            <Text>{status} </Text>
                            
                        </Item>
                     {(overtimeStatus===null) ?(
                         <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 5,  alignItems: 'center', justifyContent: 'center'}}><Button  
                    style={{width:150, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginRight: 5}}

                    bordered success

                      onPress={() => Actions.keyLaporanHarian()}>
                      <Text style={{textAlign: 'center'}}> Laporan Harian </Text>
                    </Button></View>) : (<View style={{flexDirection: 'row', marginTop: 30, marginBottom: 5,  alignItems: 'center', justifyContent: 'center'}}><Button  
                    style={{width:150, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginRight: 5}}

                    bordered success

                      onPress={() => Actions.keyLaporanHarian()}>
                      <Text style={{textAlign: 'center'}}> Laporan Harian </Text>
                    </Button><Button onPress={() => Actions.ClaimLembur()} success style={{width:150, justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
                      <Text style={{textAlign: 'center'}}> Claim Lembur </Text>
                    </Button></View>)}                    
                    </Form>
                </Content>
            </Container>
        );

}}