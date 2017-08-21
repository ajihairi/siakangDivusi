import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Icon, Button, Right } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Actions } from 'react-native-router-flux';
import BodyLembur from './lembur/BodyLembur';

export default class AppLembur extends Component {
    render() {
    return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => Actions.keyMainMenu()}>
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
    );
  }
}

module.export = AppLembur;