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
        const {
            tanggal,
            jamMulai,
            jamSelesai,
            statusPembayaran
        } = this.props.library;
        return (
            <CardSection>
                <Content>
                    <Item>
                        <Body>
                            <Label onPress={() => Actions.detaillembur({tanggal: tanggal})}>
                                {tanggal}
                            </Label>
                        </Body>
                    </Item>
                    <Item>
                        <Text> {jamMulai}</Text>
                        {(jamMulai === null && jamSelesai === null) ? (<Text />) : (<Text> s/d </Text>)}
                        <Text>{jamSelesai}</Text>
                        <Right>
                            <Text> {statusPembayaran}</Text>
                        </Right>
                    </Item>
                </Content>
            </CardSection>
        );
    }
}

export default ItemLembur;