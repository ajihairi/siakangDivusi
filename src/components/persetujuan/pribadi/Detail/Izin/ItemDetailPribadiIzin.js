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

export default class ItemDetailPribadiIzin extends Component {
    render() {

       const {
           namaPegawai,
            jenisCuti,
            departemen,
            jabatan,
           alasan,
           catatanPersetujuan,
            tanggal,
            jenisIzin
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
                            <Label>jenis izin :</Label>
                            <Label>
                                <Text>{jenisIzin}</Text>
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
                                <Text>{alasan}</Text>
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