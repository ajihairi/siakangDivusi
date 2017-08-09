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

export default class ItemDetailSPJ extends Component {
    render() {
        let articles = this.props.data.map(function (articleData, index) {
            return (
                <View>
                    <Form>
                        <Item stackedLabel>
                            <Label>ID SPJ :</Label>
                            <Label>
                                <Text>{articleData.idSPJ}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Nama Pekerjaan :</Label>
                            <Label>
                                <Text>{articleData.namaPekerjaan}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Mulai :</Label>
                            <Label>
                                <Text>{articleData.tanggalMulai}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Selesai :</Label>
                            <Label>
                                <Text>{articleData.tanggalSelesai}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Kota Tujuan :</Label>
                            <Label>
                                <Text>{articleData.kotaTujuan}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Kota Tujuan :</Label>
                            <Label>
                                <Text>{articleData.jenisKota}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Durasi :</Label>
                            <Label>
                                <Text>{articleData.durasi}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Pembayaran :</Label>
                            <Label>
                                <Text>{articleData.statusPembayaran}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Perjalanan Dinas :</Label>
                            <Label>
                                <Text>{articleData.statusPerjalananDinas}</Text>
                            </Label>
                            <Label />
                        </Item>
                    </Form>
                </View>
            );
        });

        return (
            <Content>
                {articles}
            </Content>
        );
    }
}