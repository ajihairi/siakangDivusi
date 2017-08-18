import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Icon, Button , Right} from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Actions } from 'react-native-router-flux';
import BodySPJ from './spj/BodySPJ';

export default class AppSPJ extends Component {
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
              <Title>Laporan SPJ</Title>
            </Body>
            <Right />
          </Header>
          <BodySPJ />
        </Container>
      </Provider>
    );
  }
}

module.export = AppSPJ;