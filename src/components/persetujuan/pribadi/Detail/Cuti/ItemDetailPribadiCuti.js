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

export default class ItemDetailPribadiCuti extends Component {
    render() {

        const {
           namaPegawai,
            jenisCuti,
            departemen,
            jabatan,
           catatan,
           catatanPersetujuan,
            tanggalSelesaiCuti,
            tanggalMulaiCuti
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
                                <Text>Jenis Cuti</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jenisCuti}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Tanggal Mulai</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {tanggalMulaiCuti}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Tanggal Selesai</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {tanggalSelesaiCuti}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                        <View>
                            <View>
                                <Text>Catatan</Text>
                            </View>
                            <View>
                                <Text style={{marginLeft: 200, marginTop:-23}}>: {catatan}</Text>
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