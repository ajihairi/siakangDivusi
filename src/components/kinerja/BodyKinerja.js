import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Button,
  Text
} from 'native-base';
import TabPribadi from './TabPribadi';
import TabBawahan from './contoh';
import { Actions } from 'react-native-router-flux';

export default class BodyKinerja extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Tabs initialPage={1}>
            <Tab  style={styles.tab} heading="Pribadi">
              <TabPribadi />
            </Tab>
            <Tab heading="Bawahan">
              <TabBawahan />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

const styles = {
    tab: {
        backgroundColor: '#ffffff',
    },
}