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

class ItemKinerja extends Component {
    render() {
        let articles = this.props.data.map(function (articleData, index) {
            return (
                <Card>
                    <CardItem>
                        <Body>
                            <Item>
                                <Body>
                                    <Label onPress={() => Actions.detailpribadi()}>
                                        {articleData.tanggal}
                                    </Label>
                                </Body>
                                <Right>
                                    <Text>{articleData.statusKehadiran}</Text>
                                </Right>
                            </Item>
                            <Item>
                                <Text>{articleData.jamMasuk}</Text>
                                <Text> s.d {articleData.jamKeluar}</Text>
                                <Right>
                                    <Text>{articleData.totalJam}</Text>
                                </Right>
                            </Item>
                        </Body>
                    </CardItem>
                </Card>
            )
        });
        return (
            <Content>
                {articles}
            </Content>
        );
    }
}

export default ItemKinerja;