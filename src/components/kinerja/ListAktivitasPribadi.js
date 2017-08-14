import React, { Component } from 'react';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Card,
    CardItem,
    View,
    Left,
    H1,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ListHariPribadi extends Component {
    render() {
        const {
            tanggal,
            aktivitas,
            statusKehadiran
        } = this.props.library;
            return (
                <Card>
                    <CardItem>
                        <View rounded >
                            <View style={{ height: 40 }}>
                                <H1 onPress={() => Actions.detailPribadi({ tanggal: tanggal })}>
                                    {tanggal}
                                </H1>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text>  {aktivitas}   </Text>
                            </View>
                        </View>
                    </CardItem>
            </Card>
            )
    }
}

export default ListHariPribadi;