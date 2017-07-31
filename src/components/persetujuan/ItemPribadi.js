import React, { Component } from 'react';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Text,
    H3,
    Icon,
    Left
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ItemPribadi extends Component {
    render() {
        return(
            <CardSection>
                <Content>
                    <Item>
                        
                            <H3  onPress={() => Actions.detailRemote()}> {this.props.library.jenisPengajuan}</H3>
                                 
                    </Item>
                    <Item>
                        <Text> {this.props.library.tanggalPengajuan}</Text>
                        <Text>    s/d   </Text>
                        <Text> {this.props.library.tanggalPengajuan}</Text>
                        <Right>
                           <Icon name='ios-checkmark-circle-outline' />
                        </Right>
                        <Right><Text> {this.props.library.statusPengajuan}</Text></Right>
                    </Item>
                </Content>
            </CardSection>
        );
    }
}

export default ItemPribadi;