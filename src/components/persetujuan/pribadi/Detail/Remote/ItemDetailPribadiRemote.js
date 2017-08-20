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

export default class ItemDetailPribadiRemote extends Component {
    render() {

        const {
            namaPegawai,
            departemen,
            jabatan,
            tanggal,
            jamMulai,
            jamSelesai,
            alasanRemote,
            catatanPersetujuan
        } = this.props.library;

            return (
                <Form style={{ marginLeft: 10 }}>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Nama</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {namaPegawai}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Departemen</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {departemen}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jabatan</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jabatan}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jam Mulai</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jamMulai}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jam Selesai</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jamSelesai}</Text>
                            </View>
                        </View>
                    </View>
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
                    <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                        <View>
                            <View>
                                <Text>Alasan</Text>
                            </View>
                            <View>
                                <Text style={{marginLeft: 200, marginTop:-23}}>: {alasanRemote}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                        <View>
                            <View>
                                <Text>Catatan Persetujuan</Text>
                            </View>
                            <View>
                                <Text style={{marginLeft: 200, marginTop:-23}}>: {catatanPersetujuan}</Text>
                            </View>
                        </View>
                    </View>
                </Form>
            );
    }
}