import React, { Component } from 'react';
import { 
    Container,
    Content,
    List,
    ListItem,
    Text,
    Label,
    Item
 } from 'native-base';

export default class ListActivitas extends Component {
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
                                    <Label onPress={() => Actions.detailbawahan()}>
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
        );
    }
}