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
    H1,
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
            <Card>
                {statusKehadiran === 'Hadir' ? (
                    <CardItem style={styles.Hadir} >
                        <View>
                            <View style={{ height: 40 }}>
                                <H1 style={{ color: 'white' }} onPress={() => Actions.detailpribadi({ tanggal: tanggal })}>
                                    {tanggal}
                                </H1>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text style={{ color: 'white' }}>{jamMasuk}
                                    {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
                                    {jamKeluar} </Text>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text style={{ color: 'white' }}>{totalJam}
                                    {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}> Jam </Text>)}
                                </Text>
                            </View>
                        </View>
                        <Right>
                            <Text>nama</Text>
                        </Right>
                    </CardItem>
                    ) : null}
                {statusKehadiran === 'Tidak Hadir' ? (
                    <CardItem style={styles.TidakHadir} >
                        <View>
                            <View style={{ height: 40 }}>
                                <H1 style={{ color: 'white' }} onPress={() => Actions.detailpribadi({ tanggal: tanggal })}>
                                    {tanggal}
                                </H1>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text style={{ color: 'white' }}>{jamMasuk}
                                    {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
                                    {jamKeluar} </Text>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text style={{ color: 'white' }}>{totalJam}
                                    {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}> Jam </Text>)}
                                </Text>
                            </View>
                        </View>
                        <Right>
                            <Text>nama</Text>
                        </Right>
                    </CardItem>
                    ) : null}
                {statusKehadiran === 'Libur' ? (
                    <CardItem style={styles.Libur} >
                        <View>
                            <View style={{ height: 40 }}>
                                <H1 style={{ color: 'white' }} onPress={() => Actions.detailpribadi({ tanggal: tanggal })}>
                                    {tanggal}
                                </H1>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text style={{ color: 'white' }}>{jamMasuk}
                                    {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
                                    {jamKeluar} </Text>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text style={{ color: 'white' }}>{totalJam}
                                    {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}> Jam </Text>)}
                                </Text>
                            </View>
                        </View>
                        <Right>
                            <Text>nama</Text>
                        </Right>
                    </CardItem>
                    ) : null}
            </Card>
        )
    }
}

const styles = {
    Hadir: {
        backgroundColor: '#1abc9c',

    },
    TidakHadir: {
        backgroundColor: '#e74c3c',
    },
    Libur: {
        backgroundColor: '#f39c12',
    },
}

export default ListHariPribadi;