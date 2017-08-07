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

export default class ItemDetailKinerja extends Component {
    render() {
        const {
            hari,
            tanggal,
            jamMasuk,
            jamKeluar,
            totalJam,
            statusKehadiran,
            aktivitas,
            mood,
            statusPerjalananDinas
        } = this.props.library;

            return (
                <View>
                    <Form>
                        <Item stackedLabel>
                            <Label>Hari :</Label>
                            <Label>
                                <Text>{hari}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Tanggal :</Label>
                            <Label>
                                <Text>{tanggal}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Masuk :</Label>
                            <Label>
                                <Text>{jamMasuk}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Keluar :</Label>
                            <Label>
                                <Text>{jamKeluar}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Total Jam :</Label>
                            <Label>
                                <Text>{totalJam}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Kehadiran :</Label>
                            <Label>
                                <Text>{statusKehadiran}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Aktivitas</Label>
                            <Label>
                                <Text>{aktivitas}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Mood</Label>
                            <Label>
                                <Text>{mood}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Perjalanan Dinas</Label>
                            <Label>
                                <Text>{statusPerjalananDinas}</Text>
                            </Label>
                            <Label />
                        </Item>
                    </Form>
                </View>
            );
    }
}