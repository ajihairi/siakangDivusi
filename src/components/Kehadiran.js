import React, { Component } from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Actions } from 'react-native-router-flux';
import BodyKehadiran from './Kehadiran/BodyKehadiran';

export default class Kehadiran extends Component {
    render() {
    return (
      <Provider store={createStore(reducers)}>
        <Container>
          <BodyKehadiran />
        </Container>
      </Provider>
    );
  }
}

module.export = Kehadiran;