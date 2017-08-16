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
    Picker,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ListHariPribadi extends Component {
    render() {
        const {
            nama_karyawan,
            id
        } = this.props.library;
        return (
            <Card>
                <View>
                    <Item label={nama_karyawan} value={nama_karyawan} />
                </View>
            </Card>
        )
    }
}

export default ListHariPribadi;