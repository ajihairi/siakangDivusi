import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    Item,
    Icon,
    Input,
    Button,
    Tabs,
    Tab
} from 'native-base';
import ListHari from './ListHari';
import ListActivitas from './ListActivitas';
import {View} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class TabBawahan extends Component {

    constructor(props){
        super(props)
        this.state = {date:"00-00-0000"}
      }

    render() {
        return (
            <Container>
                <Content>
                    <Item style={{marginRight:15, marginLeft: 15, marginTop: 20}}>
                        <Input placeholder='Nama Bawahan'/>
                        <Icon active name='person' />
                    </Item>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <DatePicker
                    showIcon={false}
                    style={{width: 180}}
                    date={this.state.date1}
                    mode="date"
                    placeholder="pilih tanggal"
                    format="DD-MM-YYYY"
                    minDate="2017-01-01"
                    maxDate="2030-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"

                    customStyles={{
                      dateInput: {
                      marginLeft: 36
                      }
                      }
                    }
                  onDateChange={(date1) => {this.setState({date1: date1})}}
                  />
                  <Text style={{marginRight:5, marginLeft: 5}}> s/d </Text>
                  <DatePicker
                    showIcon={false}
                    style={{width: 180, }}
                    date={this.state.date2}
                    mode="date"
                    placeholder="pilih tanggal"
                    format="DD-MM-YYYY"
                    minDate="2017-01-01"
                    maxDate="2030-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"

                    customStyles={{
                      dateInput: {
                      marginLeft: 0,
                      marginRight:36
                      }
                      }
                    }
                  onDateChange={(date2) => {this.setState({date2: date2})}}
                  />
                  </View>
                  <Button block info style={{marginLeft: 10, marginRight: 10, marginBottom : 15, marginTop: 15}}>
                        <Icon large name="search" style={{color:"white"}}>
                            <Text> Cari </Text>
                        </Icon>
                    </Button>
                    <Text style={{marginLeft: 50}}>Lihat Berdasarkan</Text>
                    <Tabs initialPage={0}>
                        <Tab heading="Hari">
                            <ListHari />
                        </Tab>
                        <Tab heading="Aktivitas">
                            <ListActivitas />
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

module.export = TabBawahan;