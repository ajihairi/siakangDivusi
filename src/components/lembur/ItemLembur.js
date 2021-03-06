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
export default ItemLembur;