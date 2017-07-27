import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Icon, Button, Right} from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Actions } from 'react-native-router-flux';
import BodyPersetujuan from './src/components/persetujuan/BodyPersetujuan';

export default class AppPersetujuan extends Component {
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
              <Title>Laporan Persetujuan</Title>
            </Body>
            <Right />
          </Header>
          <BodyPersetujuan />
        </Container>
      </Provider>
    );
  }
}

module.export = AppPersetujuan;