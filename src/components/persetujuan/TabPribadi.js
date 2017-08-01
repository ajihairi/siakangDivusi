import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Item, Container, Content, Input, Button, Text, Header} from 'native-base';
import ListPribadi from './ListPribadi';

export default class TabPribadi extends Component {
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
                    <ListPribadi />
                </Content>
            </Container>
        );
    }
}

module.export = TabPribadi;