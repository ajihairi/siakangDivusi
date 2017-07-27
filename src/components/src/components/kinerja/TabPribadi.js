import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Item, Container, Content, Input, Button, Text} from 'native-base';
import ListKinerja from './ListKinerja'

export default class TabPribadi extends Component {
    render() {

        return (
            <Container>
                <Content>
                    <Item>
                        <Icon active name='alarm' />
                        <Input placeholder='Tanggal Mulai'/>
                        <Icon active name='alarm' />
                        <Input placeholder='Tanggal Berakhir'/>
                    </Item>
                    <Button block>
                        <Text>Search</Text>
                    </Button>
                    <ListKinerja />
                </Content>
                <Button block>
                    <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}

module.export = TabPribadi;