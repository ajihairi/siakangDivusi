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

export default class ItemDetailPribadiLembur extends Component {
    render() {

         const {
           namaPekerjaan,
           tanggalPengajuan,
           pemberiPekerjaan,
           tanggal,
           hariKerja,
           status,
           anggotaLembur
        } = this.props.library;

            return (
                <View>
                    <Form>
                        <Item stackedLabel>
                            <Label>Nama Pegawai :</Label>
                            <Label>
                                <Text>--</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>departemen :</Label>
                            <Label>
                                <Text>--</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>jabatan :</Label>
                            <Label>
                                <Text>--</Text>
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
                            <Label>proyek :</Label>
                            <Label>
                                <Text>{namaPekerjaan}</Text>
                            </Label>
                            <Label />
                            </Item>
                            <Item stackedLabel last>
                            <Label>daftar peserta :</Label>
                            <Label>
                                <Text/>
                            </Label>
                            <Label />
                            </Item>
                       
                    </Form>
                </View>
            );
    }
}