import React, { Component } from 'react';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Text,
    View,
    Footer,
    Body,
    Button
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ItemDetailPribadi extends Component {
    render() {

        const {
            idPribadi,
            namaPekerjaan,
            statusPerjalananDinas,
            statusPembayaran,
            durasi,
            jenisKota,
            kotaTujuan,
            tanggalSelesai,
            tanggalMulai
        } = this.props.library;

            return (
                <View>
                    <Form>
                        <Item stackedLabel>
                            <Label>ID Pribadi :</Label>
                            <Label>
                                <Text>{idPribadi}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Nama Pekerjaan :</Label>
                            <Label>
                                <Text>{namaPekerjaan}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Mulai :</Label>
                            <Label>
                                <Text>{tanggalMulai}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Selesai :</Label>
                            <Label>
                                <Text>{tanggalSelesai}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Kota Tujuan :</Label>
                            <Label>
                                <Text>{kotaTujuan}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Kota Tujuan :</Label>
                            <Label>
                                <Text>{jenisKota}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Durasi :</Label>
                            <Label>
                                <Text>{durasi}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Pembayaran :</Label>
                            <Label>
                                <Text>{statusPembayaran}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Perjalanan Dinas :</Label>
                            <Label>
                                <Text>{statusPerjalananDinas}</Text>
                            </Label>
                            <Label />
                        </Item>
                    </Form>
                </View>
            );
    }
}