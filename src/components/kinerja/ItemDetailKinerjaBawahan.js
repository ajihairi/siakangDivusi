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

export default class ItemDetailKinerjaBawahan extends Component {
    render() {
        const {
            hari,
            tanggal,
            jamMasuk,
            jamKeluar,
            totalJam,
            statusKehadiran,
            aktivitas,
            mood
        } = this.props.library;

        return (
            <View>
                <Form style={{ marginLeft: 10 }}>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Hari</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>{hari}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Tanggal</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>{tanggal}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jam Masuk</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>{jamMasuk}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jam Keluar</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>{jamKeluar}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Total Jam</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>{totalJam}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                        <View>
                            <View>
                                <Text>Status Kehadiran</Text>
                            </View>
                            <View>
                                <Text style={{marginLeft: 200, marginTop:-23}}>{statusKehadiran}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                        <View>
                            <View>
                                <Text>Aktivitas</Text>
                            </View>
                            <View>
                                <Text style={{marginLeft: 200, marginTop:-23}}>{aktivitas}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                        <View>
                            <View>
                                <Text>Mood</Text>
                            </View>
                            <View>
                                <Text style={{marginLeft: 200, marginTop:-23}}>{mood}</Text>
                            </View>
                        </View>
                    </View>
                </Form>
            </View>
        );
    }
}