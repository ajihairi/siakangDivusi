import React,{Component} from 'react';
import { View, Image} from 'react-native';
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
import TimePickerAndroid from 'react-native-datepicker';

const Item = Picker.Item;
class FormLemburDriver extends Component{

//untuk date picker
  constructor(props) {
      super(props);
      this.state = {
        selected1: "key1"
      };
    }
    onValueChange(value: string) {
      this.setState({
        selected1: value
      });
    }

    render() {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Lembur Driver</Title>
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
                <Item label="Ke pasar" value="key0" />
                <Item label="Apaa gitu" value="key1" />
                <Item label="Ke jakarta pagi" value="key2" />
                <Item label="ke garut shubuh" value="key3" />
                <Item label="ke mertua" value="key4" />
              </Picker>
              <Text note> Tanggal </Text>
              <DatePicker
                    style={{width: 200, marginTop:10, marginLeft:10}}
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
                      }}
                      onDateChange={(date) => {this.setState({date: date})}}
                      />

                      <ListItem>
                    <CheckBox checked={this.state.checked}
                      onPress={()=>this.setState({ checked: !this.state.checked})}/>
                    <Body>
                      <Text>Waktu Pagi</Text>
                    </Body>
                    </ListItem>
                    </Form>
          </Content>
        </Container>
      );
    }
}

export default FormLemburDriver;
