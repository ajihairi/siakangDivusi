import React, { Component } from 'react';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Text,
    Button,
    View,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class DetailLembur extends Component {
    render() {
        const {
            namaPekerjaan,
            tanggal,
            jamMulai,
            jamSelesai,
            hasilKerja,
            statusPembayaran
        } = this.props.library;

        return (
            <View>
                    <Form>
                        <Item stackedLabel>
                            <Label>Nama Pekerjaan :</Label>
                            <Label>
                                <Text>{namaPekerjaan}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Tanggal :</Label>
                            <Label>
                                <Text>{tanggal}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Jam Mulai :</Label>
                            <Label>
                                <Text>{jamMulai}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Jam Selesai :</Label>
                            <Label>
                                <Text>s.d {jamSelesai}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Hasil Kerja :</Label>
                            <Label>
                                <Text>{hasilKerja}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Status Pembayaran :</Label>
                            <Label>
                                <Text>{statusPembayaran}</Text>
                            </Label>
                            <Label />
                        </Item>
                    </Form>
            </View>
        );
    }
}