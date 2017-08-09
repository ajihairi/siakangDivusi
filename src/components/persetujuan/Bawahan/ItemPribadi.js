import React, { Component } from 'react';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Card,
    CardItem,
    Text,
    H3,
    Icon
} from 'native-base';
import { CardSection } from '../../common';
import { Actions } from 'react-native-router-flux';
import * as Pribadiactions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DetailPribadi from './DetailPribadiCuti';
import { TouchableWithoutFeedback } from 'react-native';

class ItemPribadi extends Component {

    render() {
        const {
            jenisPengajuan,
            tanggalPengajuan,
            status
        } = this.props.library;

        return (
            <CardSection>
                <Content>
                    <Item>
                        
                            <H3  onPress={() => Actions.DetailPribadiCuti()}> {jenisPengajuan}</H3>
                                 
                    </Item>
                    <Item>
                        <Text> {tanggalPengajuan}</Text>
                        <Text>    s/d   </Text>
                        <Text> {tanggalPengajuan}</Text>
                        <Right>
                           {status === 'Disetujui'? (<Icon name='ios-checkmark-circle-outline' />):null}
                           {status === 'Diajukan'? (<Icon name='ios-remove-circle-outline' />):null}
                           {status === 'Ditolak'? (<Icon name='i' />):null}
                        </Right>
                    </Item>
                </Content>
            </CardSection>
        )
    }
}

export default ItemPribadi;