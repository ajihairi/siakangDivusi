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
import * as spjactions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DetailSPJ from './DetailSPJ';
import { TouchableWithoutFeedback } from 'react-native';

class ItemSPJ extends Component {

    render() {
        const {
            idSPJ,
            namaPekerjaan,
            tujuan
        } = this.props.library;

        return (
            <Card>
                <CardItem>
                    <Body>
                        <Item>
                            <Body>
                                <Label 
                                onPress={() => Actions.detailspj(this.props.library.idSPJ)}
                                >
                                    
                                    {idSPJ}
                                </Label>
                            </Body>
            
                        </Item>
                        <Item>
                            <Text>{namaPekerjaan}</Text>
                            <Body>
                                <Text></Text>
                            </Body>
                            <Right>
                                <Text>{tujuan}</Text>
                            </Right>
                        </Item>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

export default ItemSPJ;