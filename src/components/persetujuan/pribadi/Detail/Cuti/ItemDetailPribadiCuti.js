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
                            <Label>jenis pengajuan :</Label>
                            <Label>
                                <Text>{jenisCuti}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>tanggal :</Label>
                            <Label>
                                <Text>{tanggalMulaiCuti} sampai dengan {tanggalSelesaiCuti}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>catatan :</Label>
                            <Label>
                                <Text>{catatan}</Text>
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