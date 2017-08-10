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
                <View>
                    <Form>
                        <Item stackedLabel>
                            <Label>Nama Pegawai :</Label>
                            <Label>
                                <Text>{namaPegawai}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>departemen :</Label>
                            <Label>
                                <Text>{departemen}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>jabatan :</Label>
                            <Label>
                                <Text>{jabatan}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>jam :</Label>
                            <Label>
                                <Text>{jamMulai} sampai dengan {jamSelesai}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>tanggal :</Label>
                            <Label>
                                <Text>{tanggal}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>alasan :</Label>
                            <Label>
                                <Text>{alasanRemote}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>catatan Persetujuan :</Label>
                            <Label>
                                <Text>{catatanPersetujuan}</Text>
                            </Label>
                            <Label />
                        </Item>
                    </Form>
                </View>
            );
    }
}