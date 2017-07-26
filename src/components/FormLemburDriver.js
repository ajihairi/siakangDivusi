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

class FormLemburDriver extends Component{

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
                style={{width: 300, marginTop:10, marginLeft:10}}
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
              <ListItem style={{justifyContent:"flex-start", alignItems:"flex-start"}}>
                <CheckBox checked={this.state.checked1}
                onPress={()=>this.setState({ checked1: !this.state.checked1})}/>
                <List style={{marginLeft:10}}>
                  <Text style={{marginBottom:10}}>Waktu Pagi</Text>
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                      <DatePicker
                        showIcon={false}
                        date={this.state.time1}
                        mode="time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={10}

                        style={{width:100}}

                        onDateChange={(time1) => {this.setState({time1: time1});}}
                      />

                      <Text style={{marginLeft: 20, marginRight: 20}}>s/d</Text>
                      
                      <DatePicker
                        showIcon={false}
                        date={this.state.time2}
                        mode="time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={10}

                        style={{width:100}}

                        onDateChange={(time2) => {this.setState({time2: time2});}}
                      />
                      </View>
                  </List>
              </ListItem>

              <ListItem style={{justifyContent:"flex-start", alignItems:"flex-start", marginBottom: 10}}>
                <CheckBox checked={this.state.checked2}
                onPress={()=>this.setState({ checked2: !this.state.checked2})}/>
                  <List style={{marginLeft:10}}>
                    <Text style={{marginBottom:10}}>Waktu Malam</Text>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                      <DatePicker
                        style={{width: 265}}
                        showIcon={false}
                        date={this.state.time3}
                        mode="time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={10}

                        style={{width:100}}

                        onDateChange={(time3) => {this.setState({time3: time3});}}
                      />

                       <Text style={{marginLeft: 20, marginRight: 20}}>s/d</Text>

                       <DatePicker
                        showIcon={false}
                        date={this.state.time4}
                        mode="time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={10}

                        style={{width:100}}

                        onDateChange={(time4) => {this.setState({time4: time4});}}
                      />
                    </View>
                  </List>
              </ListItem>
                <List>
                  <Text note>Rincian</Text>
                  <FormItem regular style={{marginTop: 5, marginLeft: 23, width:300, marginBottom:10}}>
                  <AutoGrowingTextInput value={this.state.textValue1} placeholder={'Your Message'} style={{fontSize: 16, width:300, paddingLeft:5}} />
                  </FormItem>
                </List>

                  <List>
                    <Text note>Yang Menugaskan</Text>
                    <FormItem style={{marginTop: 5}}>
                     <Picker
                    iosHeader="Select  Name"
                    mode="dropdown"
                    selectedValue={this.state.selected2}
                    onValueChange={this._onValueChange.bind(this)}
                    >
                    <Item label="Pa Siapa" value="keya" />
                    <Item label="Bu Siapa" value="keyb" />
                    <Item label="Pa Anu" value="keyc" />
                    <Item label="Bu ini" value="keyd" />
                    <Item label="Ibu Negara" value="keye" />
                  </Picker>
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

export default FormLemburDriver;
