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

export default class DetailLembur extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Nama Pekerjaan :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Lembur :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Mulai :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Selesai :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Hasil kerja :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Pembayaran :</Label>
                            <Label/>
                        </Item>
                    </Form>
                </Content>
                <Button onPress={() => Actions.applembur()} block>
                   <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}