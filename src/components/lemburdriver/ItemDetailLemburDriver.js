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
            tanggal,
            namaPekerjaan,
            jamMulaiPagi,
            jamSelesaiPagi,
            jamMulaiMalam,
            jamSelesaiMalam,
            hasilKerja,
            statusPembayaran
        } = this.props.library;

        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel last>
                            <Label>Tanggal Lembur :</Label>
                            <Label><Text> {tanggal}</Text></Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Nama Pekerjaan :</Label>
                            <Label><Text> {namaPekerjaan}</Text></Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Mulai Pagi :</Label>
                            <Label><Text> {jamMulaiPagi}</Text></Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Selesai Pagi:</Label>
                            <Label><Text> {jamSelesaiPagi}</Text></Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Mulai Pagi :</Label>
                            <Label><Text> {jamMulaiMalam}</Text></Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Selesai Pagi:</Label>
                            <Label><Text> {jamSelesaiMalam}</Text></Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Hasil kerja :</Label>
                            <Label><Text> {hasilKerja}</Text></Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Pembayaran :</Label>
                            <Label><Text> {statusPembayaran}</Text></Label>
                            <Label />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}