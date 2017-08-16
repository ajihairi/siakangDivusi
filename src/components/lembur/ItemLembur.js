import React, { Component } from 'react';
import {
    Item,
    Content,
    Right,
    Card,
    CardItem,
    Body,
    Label,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ItemLembur extends Component {
    render() {
        const {
            tanggal,
            jamMulai,
            namaPekerjaan,
            jamSelesai,
            statusPembayaran
        } = this.props.library;
        return (
            <Card>
                <CardItem>
                    <View>
                        <View style={{ height: 40 }}>
                            <H1 onPress={() => Actions.detaillembur({ tanggal: tanggal })}>
                                {tanggal}
                            </H1>
                        </View>
                        <View style={{ height: 30 }}>
                            <Text>{namaPekerjaan}</Text>
                        </View>
                        <View style={{ height: 30 }}>
                            <Text>{jamMasuk}
                                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
                                {jamKeluar} </Text>
                        </View>
                        <View style={{ height: 30 }}>
                            <Text>{totalJam}
                                {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}> Jam </Text>)}
                            </Text>
                        </View>
                        <View style={{ height: 30 }}>
                            <Text>{statusPembayaran}</Text>
                        </View>
                    </View>
                </CardItem>
            </Card>
        );
    }
}

export default ItemLembur;