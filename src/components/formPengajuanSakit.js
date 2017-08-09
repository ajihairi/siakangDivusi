import React,{Component} from 'react';
import { View, Image, TouchableOpacity, DatePickerIOS, DatePickerAndroid} from 'react-native';
import {
  Container,
  Title,
  Header,
  itle,
  Icon,
  Right,
  Left,
  Content,
  Form,
  Label,
  Input,
  Item as FormItem,
  InputListItem,
  List,
  Body,
  Text,
  Button,
  Picker,
  ListItem,
  CheckBox
  } from 'native-base';
import DatePicker from 'react-native-datepicker';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';


const Item = Picker.Item;

class FormSakit extends Component{

//untuk date picker
  constructor(props) {
      super(props);
      this.state = {
        selected1: "key1",
        selected2: "keya"
      };
    }

    render() {
      return (
        <Container style={{backgroundColor: 'white'}}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title style={{width:200}}>Pengajuan Sakit</Title>
            </Body>
            <Right />
          </Header>
          
          <Content>
            <Form style={{padding:15}}>
              <Text note> Tanggal </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <DatePicker
                style={{width: 150, marginTop:10, marginLeft:10}}
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
              <Text> s/d </Text>
              <DatePicker
              showIcon={false}
                style={{width: 150, marginTop:10}}
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
                  marginRight:13
                  }
                  }
                }
              onDateChange={(date2) => {this.setState({date2: date2})}}
              />
              </View>

                  <List>
                  <Text note>catatan</Text>
                  <FormItem regular style={{marginTop: 5, marginLeft: 23, width:300, marginBottom:10}}>
                  <AutoGrowingTextInput value={this.state.textValue1} placeholder={'Your Message'} style={{fontSize: 16, width:300, paddingLeft:5}} />
                  </FormItem>
                </List>


                  <List style={{flexDirection: 'row', marginTop: 30,  alignItems: 'center', justifyContent: 'center'}}>
                    
                    <Button danger 
                    style={{width:150, 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      marginRight: 4}}

                      onPress={() => this.props.navigation.goBack()}>
                      <Text> Batal </Text>
                    </Button>

                    <Button primary style={{width:150, justifyContent: 'center', alignItems: 'center', marginLeft: 4}}>
                      <Text> Submit </Text>
                    </Button>

                  </List>
            </Form>
          </Content>
        </Container>
      );
    }
}

export default FormSakit;
