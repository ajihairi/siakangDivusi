import React, { Component } from 'react';
import { View, Image } from 'react-native';
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
                            <Image source={require('../../img/icons/check_white.png')} style={styles.imageStyle} />
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
                            <Image source={require('../../img/icons/cross_white.png')} style={styles.imageStyle} />
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
                            <Image source={require('../../img/icons/holiday_white.png')} style={styles.imageStyle} />
                        </Right>
                    </CardItem>
                ) : null}
                {statusKehadiran === 'Cuti' ? (
                    <CardItem style={styles.Cuti} >
                        <View>
                            <View style={{ height: 40 }}>
                                <H1 style={{ color: '#000' }} onPress={() => Actions.detailpribadi({ tanggal: tanggal })}>
                                    {tanggal}
                                </H1>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text style={{ color: '#000' }}>{jamMasuk}
                                    {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: '#000' }}> s/d </Text>)}
                                    {jamKeluar} </Text>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text style={{ color: '#000' }}>{totalJam}
                                    {(totalJam === null) ? (<Text />) : (<Text style={{ color: '#000' }}> Jam </Text>)}
                                </Text>
                            </View>
                        </View>
                        <Right>
                            <Image source={require('../../img/icons/suitcase_black.png')} style={styles.imageStyle} />
                        </Right>
                    </CardItem>
                ) : null}
                {statusKehadiran === 'Perjalanan Dinas' ? (
                    <CardItem style={styles.PerjalananDinas} >
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
                            <Image source={require('../../img/icons/car_white.png')} style={styles.imageStyle} />
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
    Cuti: {
        backgroundColor: '#FFF',
    },
    PerjalananDinas: {
        backgroundColor: '#2980b9',
    },
    imageStyle: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }
}

export default ListHariPribadi;