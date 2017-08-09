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

class ClaimLembur extends Component{

//untuk date picker
  constructor(props) {
      super(props);
      this.state = {
        selected1: "key1",
        selected2: "keyb"
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
              <Title>Klaim Lembur</Title>
            </Body>
            <Right />
          </Header>
          
          <Content>
            <Form style={{padding:15}}>
              <Text note> Pekerjaan </Text>
              <Text/>
              <Text note> Tanggal </Text>
              <Text/>
              <Text note> Peanggung Jawab </Text>
              <Text/>
              <Text note> jam masuk normal </Text>
              <Text/>
              <Text note> jam keluar normal </Text>
              <Text/>
              <ListItem style={{justifyContent:"flex-start", alignItems:"flex-start"}}>
                <List style={{marginLeft:10}}>
                  <Text style={{marginBottom:10}}>Waktu Lembur</Text>
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

              
                <List>
                  <Text note>Rincian</Text>
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

export default ClaimLembur;
