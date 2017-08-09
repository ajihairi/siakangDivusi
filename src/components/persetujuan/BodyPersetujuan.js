import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Item,Icon, Text, Button, Input } from 'native-base';
import BodyPribadi from './pribadi/BodyPribadi';
import TabSPJ from './TabSPJ';

export default class BodyPersetujuan extends Component {
    render() {
    return (
      <Container>
        <Content>
          <Tabs initialPage={0}>
            <Tab heading="Pribadi">
              <BodyPribadi />
            </Tab>
            
            <Tab heading="SPJ">
            <TabSPJ />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

module.export = BodyPersetujuan;