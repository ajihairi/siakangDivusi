import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Header, Left, Body, Title, Icon, Button, Right } from 'native-base';
import BodyKinerja from './kinerja/BodyKinerja';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default class AppKinerja extends Component {
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
              <Title style={{width:150}}>Laporan Kinerja</Title>
            </Body>
            <Right />
          </Header>
          <BodyKinerja />
        </Container>
    );
  }
}

AppRegistry.registerComponent('AppKinerja', () => AppKinerja);