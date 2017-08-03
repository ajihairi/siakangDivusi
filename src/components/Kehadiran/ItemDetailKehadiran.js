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
      let detail = this.props.data.map(function(detail, index){ 
          return (
            <Container>
                <Content>
                    <Form style={{marginTop: 30}}>
                        <Item stackedLabel>
                            <Label>Hari</Label>
                            <Label><Text>{detail.hari}</Text></Label>
                            <Label/>
                           </Item>
                        <Item stackedLabel>
                            <Label>Hari</Label>
                            <Label><Text>{detail.tanggal}</Text></Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel>
                            <Label>Hari</Label>
                            <Label><Text>{detail.jamMasuk}</Text></Label>
                            <Label/>
                           </Item>
                        <Item stackedLabel>
                            <Label>Hari</Label>
                            <Label><Text>{detail.jamKeluar}</Text></Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel>
                            <Label>Hari</Label>
                            <Label><Text>{detail.totalJam}</Text></Label>
                            <Label/>
                        </Item>
                    <Item stackedLabel>
                            <Label>Hari</Label>
                            <Label><Text>{detail.status}</Text></Label>
                            <Label/>
                        </Item>
                        <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 5,  alignItems: 'center', justifyContent: 'center'}}>
                    
                    <Button  
                    style={{width:150, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginRight: 5}}

                    bordered success

                      onPress={() => Actions.keyLaporanHarian()}>
                      <Text style={{textAlign: 'center'}}> Laporan Harian </Text>
                    </Button>

                    <Button success style={{width:150, justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
                      <Text style={{textAlign: 'center'}}> Claim Lembur </Text>
                    </Button>

                  </View>
                    </Form>
                </Content>
            </Container>
        );

});
    return(
            <Content>
                {detail}
            </Content>
        );
}}