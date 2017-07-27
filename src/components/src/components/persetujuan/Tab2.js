import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Item, Container, Content, Input, Button, Text} from 'native-base';
import List2 from './List2';

export default class Tab2 extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Item>
                        <Input placeholder='Nama Bawahan'/>
                        <Icon active name='person' />
                    </Item>
                    <Item>
                        <Icon active name='alarm' />
                        <Input placeholder='Tanggal Mulai'/>
                        <Icon active name='alarm' />
                        <Input placeholder='Tanggal Berakhir'/>
                    </Item>
                    <Button block>
                        <Text>Search</Text>
                    </Button>
                    <List2 />
                </Content>
                <Button block>
                    <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}

module.export = Tab2;