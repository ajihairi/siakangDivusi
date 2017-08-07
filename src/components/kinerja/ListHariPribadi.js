import React, { Component } from 'react';
import {
    Item,
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

class ListHariPribadi extends Component {
    render() {
        const {
            tanggal,
            statusKehadiran,
            jamMasuk,
            jamKeluar,
            totalJam
        } = this.props.library;

            return (
                <Card style={{flex: 1}}>
                    <CardItem>
                        <Body>
                            <Item>
                                <Body>
                                    <Label onPress={() => Actions.detailpribadi()}>
                                        {tanggal}
                                    </Label>
                                </Body>
                                <Right>
                                    <Text>{statusKehadiran}</Text>
                                </Right>
                            </Item>
                            <Item>
                                <Text>{jamMasuk}</Text>
                                <Text> s.d {jamKeluar}</Text>
                                <Right>
                                    <Text>{totalJam}</Text>
                                </Right>
                            </Item>
                        </Body>
                    </CardItem>
                </Card>
            )
    }
}

export default ListHariPribadi;