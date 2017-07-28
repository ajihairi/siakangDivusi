import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Item, Container, Content, Input, Button, Text} from 'native-base';
import ListKinerja from './ListKinerja'
import DatePicker from 'react-native-datepicker';

export default class TabPribadi extends Component {
    constructor(props){
        super(props)
        this.state = {date:"00-00-0000"}
      }
    render() {
            
        return (
            <Container>
                <Content>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <DatePicker
                    style={{width: 130, marginLeft:10}}
                    date={this.state.date1}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="2017-01-01"
                    maxDate="2030-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"

                    customStyles={{
                      dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                      },
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
                    style={{width: 100}}
                    date={this.state.date2}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="2017-01-01"
                    maxDate="2030-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"

                    customStyles={{
                      dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                      },
                      dateInput: {
                      marginLeft: 0,
                      marginRight:5
                      }
                      }
                    }
                  onDateChange={(date2) => {this.setState({date2: date2})}}
                  />
                  <Button primary transparent >
                        <Icon large name="search" style={{color:"dodgerblue"}}/>
                    </Button>
                  </View>
                    
                    <ListKinerja />
                </Content>
            </Container>
        );
    }
}

module.export = TabPribadi;