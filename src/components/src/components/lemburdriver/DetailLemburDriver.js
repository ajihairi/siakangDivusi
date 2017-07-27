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

export default class DetailLemburDriver extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>ID SPJ :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel>
                            <Label>Nama Pekerjaan :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Mulai :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Selesai :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Kota Tujuan :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Durasi :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Perjalanan Dinas :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Pembayaran :</Label>
                            <Label/>
                        </Item>
                    </Form>
                </Content>
                <Button onPress={() => Actions.applemburdriver()} block>
                   <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}