// TAB 3 MAH GAADAAN    

import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Item, Container, Content, Input, Button, Text} from 'native-base';


export default class Tab3 extends Component {
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
                    
                </Content>
                <Button block>
                    <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}

module.export = Tab3;

