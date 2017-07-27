import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Header, Left, Body, Title, Icon, Button, Right } from 'native-base';
import reducers from './src/reducers';
import BodyKinerja from './src/components/kinerja/BodyKinerja';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default class AppKinerja extends Component {
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
              <Title>Laporan Kinerja</Title>
            </Body>
            <Right />
          </Header>
          <BodyKinerja />
        </Container>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AppKinerja', () => AppKinerja);