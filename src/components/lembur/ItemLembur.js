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

class ItemLembur extends Component {
    render() {
        return(
            <CardSection>
                <Content>
                    <Item>
                        <Body>
                            <Label  onPress={() => Actions.detaillembur()}> {this.props.library.tanggal}</Label>
                        </Body>
                    </Item>
                    <Item>
                        <Text> {this.props.library.jamMulai}</Text>
                        <Text> - {this.props.library.jamSelesai}</Text>
                        <Right>
                            <Text> {this.props.library.statusPembayaran}</Text>
                        </Right>
                    </Item>
                </Content>
            </CardSection>
        );
    }
}

export default ItemLembur;