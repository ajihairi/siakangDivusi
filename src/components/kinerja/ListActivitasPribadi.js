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
            activitas
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
                            </Item>
                            <Item>
                                <Text>Activitas :</Text>
                                <Label><Text>{activitas}</Text></Label>
                            </Item>
                        </Body>
                    </CardItem>
                </Card>
            )
    }
}

export default ListHariPribadi;