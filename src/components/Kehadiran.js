import React, { Component } from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Actions } from 'react-native-router-flux';
import {Header, Left, Right, Title, Body, Button, Icon,Item,Picker} from 'native-base';
import BodyKehadiran from './Kehadiran/BodyKehadiran';

export default class Kehadiran extends Component {
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
      <Provider store={createStore(reducers)}>
        <Container>
        <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Kehadiran</Title>
            </Body>
            <Right>
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
              </Right>

          </Header>
          <BodyKehadiran />
        </Container>
      </Provider>
    );
  }
}

module.export = Kehadiran;