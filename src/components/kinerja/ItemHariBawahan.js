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

class ItemHariBawahan extends Component {
    render() {
        return(
            <CardSection>
                <Content>
                    <Item>
                        <Body>
                            <Label onPress={() => Actions.detailbawahan()}> {this.props.library.tanggal}</Label>
                        </Body>
                    </Item>
                    <Item>
                        <Text> {this.props.library.jamKerja}</Text>
                        <Text> - {this.props.library.jamSelesai}</Text>
                        <Body>
                            <Text> {this.props.library.totalJamKerja}</Text>
                        </Body>
                        <Right>
                            <Text> {this.props.library.alasanKehadiran}</Text>
                        </Right>
                    </Item>
                </Content>
            </CardSection>
        );
    }
}

export default ItemHariBawahan;