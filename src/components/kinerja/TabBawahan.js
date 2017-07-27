import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    Item,
    Icon,
    Input,
    Button,
    Tabs,
    Tab
} from 'native-base';
import ListHari from './ListHari';
import ListActivitas from './ListActivitas';

export default class TabBawahan extends Component {
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
                    <Text>Lihat Berdasarkan</Text>
                    <Tabs initialPage={0}>
                        <Tab heading="Hari">
                            <ListHari />
                        </Tab>
                        <Tab heading="Aktivitas">
                            <ListActivitas />
                        </Tab>
                    </Tabs>
                </Content>
                <Button block>
                    <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}

module.export = TabBawahan;