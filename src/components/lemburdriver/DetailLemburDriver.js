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
        const {
            namaPekerjaan,
            Pemograman,
            tanggal,
            jenisLembur,
            jamMulai,
            jamSelesai,
            hasilKerja,
            statusPembayaran
        } = this.props.library;

        return (
            <Container>
                <Content>
                    <Form style={{ marginTop: 30 }}>
                        <Item stackedLabel>
                            <Label>Nama Pekerjaan :</Label>
                            <Text> {namaPekerjaan}</Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Lembur :</Label>
                            <Text> {tanggal}</Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jenis Lembur :</Label>
                            <Text> {jenisLembur}</Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Mulai :</Label>
                            <Text> {jamMulai}</Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Selesai :</Label>
                            <Text> {jamSelesai}</Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Hasil kerja :</Label>
                            <Text> }{hasilKerja}</Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Pembayaran :</Label>
                            <Text> {statusPembayaran}</Text>
                        </Item>
                    </Form>
                </Content>
                <Button
                    block
                    onPress={() => this.props.navigation.goBack()}
                    style={{ marginRight: 10, marginLeft: 10, marginBottom: 15 }}
                >
                    <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}