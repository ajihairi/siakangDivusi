import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Icon, Button, Right } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Actions } from 'react-native-router-flux';
import BodyLemburDriver from './lemburdriver/BodyLemburDriver';

export default class AppLemburDriver extends Component {
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
              <Title style={{width: 200}}>Laporan Lembur Driver</Title>
            </Body>
            <Right />
          </Header>
          <BodyLemburDriver />
        </Container>
    );
  }
}

module.export = AppLemburDriver;