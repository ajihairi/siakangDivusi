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
                    <Form style={{marginTop: 30}}>
                        <Item stackedLabel>
                            <Label>Nama Pekerjaan :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Lembur :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jenis Lembur :</Label>
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
                <Button 
                block 
                onPress={() => this.props.navigation.goBack()} 
                style={{marginRight: 10, marginLeft: 10, marginBottom: 15}}>
                   <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}