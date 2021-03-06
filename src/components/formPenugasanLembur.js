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

class FormPenugasanLembur extends Component{

//untuk date picker
  constructor(props) {
      super(props);
      this.state = {
        selected1: "key1",
        selected2: "keya"
      };
    }
    onValueChange(value: string) {
      this.setState({
        selected1: value
      });
    }

    _onValueChange(value: string) {
      this.setState({
        selected2: value
      });
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
              <Title style={{width:200}}>Penugasan Lembur</Title>
            </Body>
            <Right />
          </Header>
          
          <Content>
            <Form style={{padding:15}}>
              <Text note> Pekerjaan </Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item label="pekerjaan 1" value="key0" />
                <Item label="pekerjaan 2" value="key1" />
                <Item label="pekerjaan 3" value="key2" />
                <Item label="pekerjaan 4" value="key3" />
                <Item label="dll" value="key4" />
              </Picker>
              <Text note> Tanggal </Text>
              <DatePicker
                style={{width: 314, marginTop:10, marginLeft:10}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
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
              onDateChange={(date) => {this.setState({date: date})}}
              />
              
                <List>
                  <Text note>Rincian</Text>
                  <FormItem regular style={{marginTop: 5, marginLeft: 23, width:300, marginBottom:10}}>
                  <AutoGrowingTextInput value={this.state.textValue1} placeholder={'Your Message'} style={{fontSize: 16, width:300, paddingLeft:5}} />
                  </FormItem>
                </List>

              <Text note> Menugaskan : </Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item label="nama orang 1" value="key0" />
                <Item label="nama orang 2" value="key1" />
                <Item label="nama orang 3" value="key2" />
                <Item label="nama orang 4" value="key3" />
                <Item label="dst" value="key4" />
              </Picker>
              

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

export default FormPenugasanLembur;
