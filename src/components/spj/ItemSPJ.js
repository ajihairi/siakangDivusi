import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {
    Item,
    Content,
    Right,
    Card,
    CardItem,
    H1,
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
                    <Right>
                        {statusPembayaran === 'Belum Terbayarkan' ? (<Image source={require('../../img/icons/cross_black.png')} style={styles.imageStyle} />) : (<Image source={require('../../img/icons/check_black.png')} style={styles.imageStyle} />)}
                    </Right>
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    imageStyle: {
        width: 50,
        height: 50,
        resizeMode:'contain'
    }
}

export default ItemSPJ;