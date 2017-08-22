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

export default class ItemDetailPribadiLemburDriver extends Component {
    render() {

        const {
            namaPegawai,
            departemen,
            jabatan,
            tanggal,
            proyek,
            jamMulaiPagi,
            jamSelesaiPagi,
            jamMulaiMalam,
            jamSelesaiMalam,
            rincianPengerjaan,
            pemberiTugas,
        } = this.props.library;

            return (
                <View>
                    <Form>
                        <Item stackedLabel>
                            <Label>ID Pribadi :</Label>
                            <Label>
                                <Text>{namaPegawai}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Nama Pekerjaan :</Label>
                            <Label>
                                <Text>{departemen}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Mulai :</Label>
                            <Label>
                                <Text>{jabatan}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Selesai :</Label>
                            <Label>
                                <Text>{tanggal}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Kota Tujuan :</Label>
                            <Label>
                                <Text>{proyek}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Kota Tujuan :</Label>
                            <Label>
                                <Text>{jamMulaiPagi}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Durasi :</Label>
                            <Label>
                                <Text>{jamSelesaiPagi}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Pembayaran :</Label>
                            <Label>
                                <Text>{jamMulaiMalam}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Perjalanan Dinas :</Label>
                            <Label>
                                <Text>{jamSelesaiMalam}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Perjalanan Dinas :</Label>
                            <Label>
                                <Text>{rincianPengerjaan}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Perjalanan Dinas :</Label>
                            <Label>
                                <Text>{pemberiTugas}</Text>
                            </Label>
                            <Label />
                        </Item>
                    </Form>
                </View>
            );
    }
}