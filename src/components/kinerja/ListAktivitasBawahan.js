import React, { Component } from 'react';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Card,
    CardItem,
    View,
    Left,
    H1,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ListHariBawahan extends Component {
    render() {
        const {
            id_karyawan,
            nama_karyawan,
            tanggal,
            aktivitas,
            mood
        } = this.props.library;
        return (
            <Card>
                <CardItem>
                    <Left>
                        <View>
                            <View style={{ height: 40 }}>
                                <H1 onPress={() => Actions.detailbawahan({ tanggal: tanggal, nama_karyawan: nama_karyawan })}>
                                    {tanggal}
                                </H1>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text>{aktivitas}</Text>
                            </View>
                        </View>
                        </Left>
                        <Right>
                            <Text>{mood}</Text>
                        </Right>
                </CardItem>
            </Card>
        )
    }
}

export default ListHariBawahan;