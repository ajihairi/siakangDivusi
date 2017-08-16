import React, { Component } from 'react';
import {
    Item,
    Container,
    Content,
    Right,
    Body,
    Label,
    Card,
    CardItem,
    Left,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';
import * as lemburactions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableWithoutFeedback, View } from 'react-native';
import DetailLemburDriver from './DetailLemburDriver';

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
                                {(jamMulaiPagi === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
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

const mapStateToProps = state => {
    return { selectLibraryId: state.selectLibraryId };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(lemburactions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemLemburDriver);