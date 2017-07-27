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

class ItemSPJ extends Component {
    render() {
        return(
            <CardSection>
                <Content>
                    <Item>
                        <Body>
                            <Label  onPress={() => Actions.detailspj()}> {this.props.library.id_spj}</Label>
                        </Body>
                    </Item>
                    <Item>
                        <Text> {this.props.library.namaPekerjaan}</Text>
                        <Body>
                        </Body>
                        <Right>
                            <Text> {this.props.library.kotaTujuan}</Text>
                        </Right>
                    </Item>
                </Content>
            </CardSection>
        );
    }
}

export default ItemSPJ;