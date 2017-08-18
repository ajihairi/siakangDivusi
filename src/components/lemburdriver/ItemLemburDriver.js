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

class ItemLemburDriver extends Component {
    render() {
        const {
            tanggal,
            jamMulaiPagi,
            jamSelesaiPagi,
            jamMulaiMalam,
            jamSelesaiMalam,
            statusPembayaran
        } = this.props.library;
        return (
            <Card>
                <CardItem>
                    <View>
                        <View style={{ height: 40 }}>
                            <H1 onPress={() => Actions.detaillemburdriver({ tanggal: tanggal })}>
                                {tanggal}
                            </H1>
                        </View>
                        <View style={{ height: 30 }}>
                            <Text>{jamMulaiPagi}
                                {(jamMulaiPagi === null && jamSelesaiPagi === null) ? (<Text />) : (<Text> s/d </Text>)}
                                {jamSelesaiPagi} </Text>
                        </View>
                        <View style={{ height: 30 }}>
                            <Text>{jamMulaiMalam}
                                {(jamMulaiMalam === null && jamSelesaiMalam === null) ? (<Text />) : (<Text> s/d </Text>)}
                                {jamSelesaiMalam} </Text>
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

export default ItemLemburDriver;