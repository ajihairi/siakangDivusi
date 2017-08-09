import React, { Component } from 'react';
import { View } from 'react-native';
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

class ListHariPribadi extends Component {
    render() {
        const {
            tanggal,
            statusKehadiran,
            jamMasuk,
            jamKeluar,
            totalJam
        } = this.props.library;

        return (
            <Card style={{ flex: 1 }}>
                <CardItem>
                    <Body>
                        <Item>
                            <Body>
                                <Label onPress={() => Actions.detailpribadi({ tanggal: tanggal })}>
                                    {tanggal}
                                </Label>
                            </Body>
                            <Right>
                                {statusKehadiran === 'Hadir' ? (<View style={styles.Hadir} />) : null}
                                {statusKehadiran === 'Tidak Hadir' ? (<View style={styles.TidakHadir} />) : null}
                                {statusKehadiran === 'Libur' ? (<View style={styles.Libur} />) : null}
                            </Right>
                        </Item>
                        <Item>
                            <Text>{jamMasuk}</Text>
                            {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text> s/d </Text>)}
                            <Text>{jamKeluar}</Text>
                            <Right>
                                <Text>{totalJam}</Text>
                            </Right>
                        </Item>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

const styles = {
    Hadir: {
        width: 70,
        height: 30,
        backgroundColor: 'green'
    },
    TidakHadir: {
        width: 70,
        height: 30,
        backgroundColor: 'red'
    },
    Cuti: {
        width: 70,
        height: 30,
        backgroundColor: 'purple'
    },
    Libur: {
        width: 70,
        height: 30,
        backgroundColor: 'yellow'
    },
    PerjalananDinas: {
        width: 70,
        height: 30,
        backgroundColor: 'black'
    },
}

export default ListHariPribadi;