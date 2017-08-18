import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Icon, Button, Right } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Actions } from 'react-native-router-flux';
import BodyLembur from './lembur/BodyLembur';

export default class AppLembur extends Component {
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
              <Title style={{width:150}}>Laporan Lembur</Title>
            </Body>
            <Right />
          </Header>
          <BodyLembur />
        </Container>
      </Provider>
    );
  }
}

module.export = AppLembur;