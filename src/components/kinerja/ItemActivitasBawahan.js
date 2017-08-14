import React, { Component } from 'react';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Left,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ItemActivitasBawahan extends Component {
    render() {
        return(
            <CardSection>
                <Content>
                    <Item>
                        <Body>
                            <Label onPress={() => Actions.detailbawahan()}>{this.props.library.tanggal}</Label>
                        </Body>
                    </Item>
                    <Item>
                        <Left>
                            <Label>Activitas :</Label>
                        </Left>
                    </Item>
                    <Item>
                        <Left>
                            <Text>{this.props.library.activitas}</Text>
                        </Left>
                    </Item>
                </Content>
            </CardSection>
        );
    }
}

export default ItemActivitasBawahan;