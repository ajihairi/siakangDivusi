import React, { Component } from 'react';
import {
    Item,
    Content,
    Left,
    Right,
    Body,
    Label,
    Card,
    CardItem,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';
import * as spjactions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DetailSPJ from './DetailSPJ';
import { TouchableWithoutFeedback } from 'react-native';

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
                <CardItem style={styles.Hadir} >
                    <Left>
                        <View style={{ height: 40 }}>
                            <Left>
                                <H1 style={{ color: 'white' }} onPress={() => Actions.detailpribadi({ tanggal: tanggal })}>
                                    {idSPJ}
                                </H1>
                            </Left>
                        </View>
                        <View style={{ height: 30 }}>
                            <Left>
                                <Text style={{ color: 'white' }}>  {namaPekerjaan}   </Text>
                            </Left>
                        </View>
                        <View style={{ height: 30 }}>
                            <Left>
                                <Text style={{ color: 'white' }}>  {tujuan} </Text>
                            </Left>
                        </View>
                        <View style={{ height: 30 }}>
                            <Left>
                                <Text style={{ color: 'white' }}>  {statusPembayaran} </Text>
                            </Left>
                        </View>
                    </Left>
                    <Right>
                        <Text>nama</Text>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}

export default ItemSPJ;