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

class ItemLemburDriver extends Component {
    render() {
        return(
            <CardSection>
                <Content>
                    <Item>
                        <Body>
                            <Label  onPress={() => Actions.detaillemburdriver()}> {this.props.library.jenisPengajuan}</Label>
                        </Body>
                    </Item>
                    <Item>
                        <Text> {this.props.library.tanggalPengajuan}</Text>
                        <Right>
                            <Text> {this.props.library.statusPengajuan}</Text>
                        </Right>
                    </Item>
                </Content>
            </CardSection>
        );
    }
}

export default ItemLemburDriver;