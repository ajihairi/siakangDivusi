import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Item,Icon, Text, Button, Input } from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

export default class BodyPersetujuan extends Component {
    render() {
    return (
      <Container>
        <Content>
          <Tabs initialPage={0}>
            <Tab heading="Pribadi">
              <Tab1 />
            </Tab>
            <Tab heading="Bawahan">
              <Tab2 />
            </Tab>
            <Tab heading="SPJ">
            <Tab3 />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

module.export = BodyPersetujuan;