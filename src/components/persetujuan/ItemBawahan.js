import React, { Component } from 'react';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ItemBawahan extends Component {
    render() {
        return(
            <CardSection>
                <Content>
                    <Item>
                        <Body>
                            <Label  onPress={() => Actions.detailRemote()}> {this.props.library.namaKaryawan}</Label>
                        </Body>
                    </Item>
                    <Item>
                        <Text> {this.props.library.jenisPengajuan}</Text>
                        <Right>
                            <Text> {this.props.library.tanggalPengajuan}</Text>
                        </Right>
                    </Item>
                </Content>
            </CardSection>
        );
    }
}

export default ItemBawahan;