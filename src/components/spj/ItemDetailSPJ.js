import React, { Component } from 'react';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Left,
    Right,
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
        const {
            idSPJ,
            namaPekerjaan,
            tanggalMulai,
            tanggalSelesai,
            kotaTujuan,
            jenisKOta,
            durasi,
            statusPembayaran,
            statusPerjalananDinas
        } = this.props.library;

        return (
            <View>
                <Form style={{ marginLeft: 10 }}>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Id SPJ</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {idSPJ}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Nama Pekerjaan</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {namaPekerjaan}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Tanggal Mulai</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {tanggalMulai}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Tanggal Selesai</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {tanggalSelesai}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Kota Tujuan</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {kotaTujuan}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jenis Tujuan</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jenisKOta}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Durasi</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {durasi}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Status Pembayaran</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {statusPembayaran}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Status Perjalanan Dinas</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {statusPerjalananDinas}</Text>
                            </View>
                        </View>
                    </View>
                </Form>
            </View>
        );
    }
}