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

export default class DetailKehadiran extends Component {
    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Content>
                    <Form style={{marginTop: 30}}>
                        <Item stackedLabel>
                            <Label>jam masuk</Label>
                            <Text></Text>
                           </Item>
                        <Item stackedLabel>
                            <Label>jam pulang</Label>
                            <Text></Text>
                        </Item>
                        <Item stackedLabel>
                            <Label>total jam kerja</Label>
                            <Text></Text>
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
                <Button 
                block 
                onPress={() => this.props.navigation.goBack()} 
                style={{marginRight: 10, marginLeft: 10, marginBottom: 15}}>
                   <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}