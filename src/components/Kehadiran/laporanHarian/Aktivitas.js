import React, { Component } from 'react';
import { View, Image, TouchableOpacity, DatePickerIOS, DatePickerAndroid } from 'react-native';
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
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';


const Item = Picker.Item;

class Aktivitas extends Component {

  //untuk date picker
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1",
      selected2: "keyb"
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
      <Container style={{ backgroundColor: 'white' }}>
        <Content>
          <Form style={{ padding: 15 }}>
            <Text note> Tanggal </Text>
            <DatePicker
              style={{ width: 300, marginTop: 10, marginLeft: 10 }}
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
              onDateChange={(date) => { this.setState({ date: date }) }}
            />
            <ListItem style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
              <List style={{ padding: 15 }}>
                <Text note>Jam Masuk</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <DatePicker
                    showIcon={false}
                    date={this.state.time1}
                    mode="time"
                    format="HH:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    minuteInterval={10}

                    style={{ width: 300 }}

                    onDateChange={(time1) => { this.setState({ time1: time1 }); }}
                  />
                </View>
              </List>
            </ListItem>

            <ListItem style={{ justifyContent: "flex-start", alignItems: "flex-start", marginBottom: 10 }}>
              <List style={{ padding: 15 }}>
                <Text note>Jam Keluar</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <DatePicker
                    style={{ width: 265 }}
                    showIcon={false}
                    date={this.state.time3}
                    mode="time"
                    format="HH:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    minuteInterval={10}

                    style={{ width: 300 }}

                    onDateChange={(time3) => { this.setState({ time3: time3 }); }}
                  />
                </View>
              </List>
            </ListItem>
            <List>
              <Text note>Aktivitas Harian</Text>
              <FormItem regular style={{ marginTop: 5, marginLeft: 23, width: 300, marginBottom: 10 }}>
                <AutoGrowingTextInput value={this.state.textValue1} placeholder={'tulis disini'} style={{ fontSize: 16, width: 300, paddingLeft: 5 }} />
              </FormItem>
            </List>

            <List>
              <Text note>catatan</Text>
              <FormItem regular style={{ marginTop: 5, marginLeft: 23, width: 300, marginBottom: 10 }}>
                <AutoGrowingTextInput value={this.state.textValue1} placeholder={'tulis disini'} style={{ fontSize: 16, width: 300, paddingLeft: 5 }} />
              </FormItem>
            </List>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Aktivitas;

