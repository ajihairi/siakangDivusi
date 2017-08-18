import React, { Component } from 'react';
import {
    Item,
    Content,
    Right,
    Card,
    CardItem,
    H1,
    View,
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
                            <Text>{jamMulai}
                                {(jamMulai === null && jamSelesai === null) ? (<Text />) : (<Text> s/d </Text>)}
                                {jamSelesai} </Text>
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