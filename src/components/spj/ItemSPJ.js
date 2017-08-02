import React, { Component } from 'react';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Card,
    CardItem,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ItemSPJ extends Component {
    render() {
        let articles = this.props.data.map(function(articleData, index){
            return (
                <Card>
                    <CardItem>
                        <Body>
                            <Item>
                                <Body>
                                    <Label onPress={() => Actions.detailspj()}>
                                    {articleData.idSPJ}
                                    </Label> 
                                </Body>
                            </Item>
                            <Item>
                                <Text>{articleData.namaPekerjaan}</Text>
                                <Body>
                                    <Text></Text>
                                </Body>
                                <Right>
                                    <Text>{articleData.tujuan}</Text>
                                </Right>
                            </Item>
                        </Body>
                    </CardItem>
                </Card>
            )
        });

        return(
            <Content>
                {articles}
            </Content>
        );
    }
}

export default ItemSPJ;