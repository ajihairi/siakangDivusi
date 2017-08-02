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
import TabBawahan from './TabBawahan';

export default class BodyKinerja extends Component {
    render() {
    return (
      <Container>
        <Content>
          <Tabs initialPage={0}>
            <Tab heading="Pribadi">
              <TabPribadi />
            </Tab>
            <Tab heading="Bawahan">
              <TabBawahan />
            </Tab>
          </Tabs>
        </Content>
        <Button onPress={() => this.props.navigation.goBack()} block>
                    <Text>Back</Text>
                </Button>
      </Container>
    );
  }
}

module.export = BodyKinerja;