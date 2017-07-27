import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Item, Container, Content, Input, Button, Text} from 'native-base';
import List1 from './List1';

export default class Tab1 extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Item rounded>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button block rounded>
                        <Text>Search</Text>
                    </Button>
                    <List1 />
                </Content>
                <Button block>
                    <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}

module.export = Tab1;