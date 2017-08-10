import React, { Component } from 'react';
import { 
    Container,
    Content,
    List,
    ListItem,
    Text,
    Label,
    Card,
    CardItem,
    Body,
    Item
 } from 'native-base';

export default class ListAktivitasBawahan extends Component {
    render() {
        const {
            tanggal,
            aktivitas
        } = this.props.library;
        return (
            <Card style={{flex: 1}}>
                    <CardItem>
                        <Body>
                            <Item>
                                <Body>
                                    <Label onPress={() => Actions.detailbawahan()}>
                                        {tanggal}
                                    </Label>
                                </Body>
                            </Item>
                            <Item>
                                <Text>Aktivitas :</Text>
                                <Label><Text>{aktivitas}</Text></Label>
                            </Item>
                        </Body>
                    </CardItem>
                </Card>
        );
    }
}