import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Icon, Button, Right} from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Actions } from 'react-native-router-flux';
import BodyPersetujuan from './persetujuan/BodyPersetujuan';

export default class AppPersetujuan extends Component {
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
              <Title style={{width: 200}}>Laporan Persetujuan</Title>
            </Body>
            <Right />
          </Header>
          <BodyPersetujuan />
        </Container>
    );
  }
}

module.export = AppPersetujuan;