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

export default class ItemDetailLemburDriver extends Component {
    render() {
        const {
            tanggal,
            jamMulaiPagi,
            jamSelesaiPagi,
            jamMulaiMalam,
            jamSelesaiMalam,
            statusPembayaran
        } = this.props.library;

        return (
            <View>
                <Form style={{ marginLeft: 10 }}>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Tanggal</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {tanggal}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jam Mulai Pagi</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jamMulaiPagi}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jam Selesai Pagi</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jamSelesaiPagi}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jam Mulai Malam</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jamMulaiMalam}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jam Selesai Malam</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jamSelesaiMalam}</Text>
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
                </Form>
            </View>
        );
    }
}