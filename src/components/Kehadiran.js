import React, { Component } from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Actions } from 'react-native-router-flux';
import {Header, Left, Right, Title, Body, Button, Icon} from 'native-base';
import BodyKehadiran from './Kehadiran/BodyKehadiran';

export default class Kehadiran extends Component {
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
            <Right/>

          </Header>
          <BodyKehadiran />
        </Container>
      </Provider>
    );
  }
}

module.export = Kehadiran;