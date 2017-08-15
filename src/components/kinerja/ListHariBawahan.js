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
    H1,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ItemHariBawahan extends Component {

    render() {
        const {
            tanggal,
            statusKehadiran,
            jamMasuk,
            jamKeluar,
            totalJam
        } = this.props.library;

        return (
            <Card>
                {statusKehadiran === 'Hadir' ? (
                    <CardItem style={styles.Hadir} >
                        <View rounded >
                            <Item style={{ height: 40 }}>
                                <H1 onPress={() => Actions.detailbawahan({ tanggal: tanggal })}>
                                    {tanggal}
                                </H1>
                            </Item>
                            <Item style={{ height: 30 }}>
                                <Text>  {jamMasuk}   </Text>
                                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text>s/d </Text>)}
                                <Text> {jamKeluar} </Text>
                            </Item>
                            <Item style={{ height: 30 }}>
                                <Text>  {totalJam} </Text>
                                {(totalJam === null) ? (<Text />) : (<Text> Jam </Text>)}
                            </Item>
                        </View>
                    </CardItem>)
                    : null}
                {statusKehadiran === 'Tidak Hadir' ? (
                    <CardItem style={styles.TidakHadir}>
                        <View rounded>
                            <Item style={{ height: 40 }}>
                                <H1 onPress={() => Actions.detailbawahan({ tanggal: tanggal })}>
                                    {tanggal}
                                </H1>
                            </Item>
                            <Item style={{ height: 30 }}>
                                <Text>  {jamMasuk}   </Text>
                                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text>s/d </Text>)}
                                <Text> {jamKeluar} </Text>
                            </Item>
                            <Item style={{ height: 30 }}>
                                <Text>  {totalJam} </Text>
                                {(totalJam === null) ? (<Text />) : (<Text> Jam </Text>)}
                            </Item>
                        </View>
                    </CardItem>)
                    : null}
                {statusKehadiran === 'Libur' ? (
                    <CardItem style={styles.Libur}>
                        <View rounded>
                            <Item style={{ height: 40 }}>
                                <H1 onPress={() => Actions.detailbawahan({ tanggal: tanggal })}>
                                    {tanggal}
                                </H1>
                            </Item>
                            <Item style={{ height: 30 }}>
                                <Text>  {jamMasuk}   </Text>
                                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text>s/d </Text>)}
                                <Text> {jamKeluar} </Text>
                            </Item>
                            <Item style={{ height: 30 }}>
                                <Text>  {totalJam} </Text>
                                {(totalJam === null) ? (<Text />) : (<Text> Jam </Text>)}
                            </Item>
                        </View>
                    </CardItem>)
                    : null}
            </Card>
        );
    }
}

const styles = {
    Hadir: {
        backgroundColor: '#2ecc71'
    },
    TidakHadir: {
        backgroundColor: '#e74c3c'
    },
    Libur: {
        backgroundColor: '#e67e22'
    },
}

export default ItemHariBawahan;