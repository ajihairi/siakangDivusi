import React, { Component } from 'react';
import { 
    Container, 
    Content, 
    Form, 
    Item, 
    Input, 
    Label, 
    Text,
    Button
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class DetailKehadiran extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>ID SPJ</Label>
                            <Text></Text>
                        </Item>
                        <Item stackedLabel>
                            <Label>Nama Pekerjaan</Label>
                            <Text></Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Mulai</Label>
                            <Text></Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Selesai</Label>
                            <Text></Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Kota Tujuan</Label>
                            <Text></Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Durasi</Label>
                            <Text></Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Perjalanan Dinas</Label>
                            <Text></Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Pembayaran</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
                <Button onPress={() => Actions.appspj()} block>
                   <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}