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
    H3,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ItemSPJ extends Component {
    render() {
        const {
            idSPJ,
            namaPekerjaan,
            tujuan,
            statusPembayaran
        } = this.props.library;
        return (
            <Card>
                <CardItem>
                    <View>
                        <View style={{ height: 35 }}>
                            <H3 onPress={() => Actions.detailspj({ idSPJ: idSPJ })}>
                                {idSPJ}
                            </H3>
                        </View>
                        <View style={{ height: 40 }}>
                            <H1>{namaPekerjaan}</H1>
                        </View>
                        <View style={{ height: 30 }}>
                            <Text>{tujuan}</Text>
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

export default ItemSPJ;