import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Item, Container, Content, Input, Button, Text, Header} from 'native-base';
import List1 from './List1';

export default class Tab1 extends Component {
    render() {
        return (
            <Container>
             <Header searchBar rounded>
                  <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                  </Item>
                  <Button transparent>
                    <Text>Search</Text>
                  </Button>
                </Header>
                <Content>
                    <List1 />
                </Content>
            </Container>
        );
    }
}

module.export = Tab1;