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
                    <Body>
                        <Item>
                            <Body>
                                <Label
                                    onPress={() => Actions.detaillemburdriver({ tanggal: tanggal })}
                                >
                                    {tanggal}
                                </Label>
                            </Body>
                        </Item>
                        <Item>
                            <Left>
                                <Item>
                                    <Text>{jamMulaiPagi}</Text>
                                    {(jamMulaiPagi === null && jamSelesaiPagi === null) ? (<Text />) : (<Text> s/d </Text>)}
                                    <Text>{jamSelesaiPagi}</Text>
                                </Item>
                                <Item>
                                    <Text>{jamMulaiMalam}</Text>
                                    {(jamMulaiMalam === null && jamSelesaiMalam === null) ? (<Text />) : (<Text> s/d </Text>)}
                                    <Text>{jamSelesaiMalam}</Text>
                                </Item>
                            </Left>
                            <Right>
                                <Text> {statusPembayaran}</Text>
                            </Right>
                        </Item>
                    </Body>
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