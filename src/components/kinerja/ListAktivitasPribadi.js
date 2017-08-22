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
            aktivitas,
            statusKehadiran,
            mood
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
                                {(aktivitas === null) ? (<Text style={{ color: 'white'}}>Tidak Ada Aktivitas</Text>) : (<Text style={{ color: 'white' }}> {aktivitas} </Text>)}
                            </View>
                        </View>
                        <Right>
                            {mood === 'Idle' ? (<Image source={require('../../img/mood/idle.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Males parah' ? (<Image source={require('../../img/mood/malesparah.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Overload kerjaan' ? (<Image source={require('../../img/mood/overload.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Semangat 45 bekerja' ? (<Image source={require('../../img/mood/semangat45.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Standar' ? (<Image source={require('../../img/mood/standar.png')} style={styles.imageStyle} />) : null}
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
                                {(aktivitas === null) ? (<Text style={{ color: 'white'}}>Tidak Ada Aktivitas</Text>) : (<Text style={{ color: 'white' }}> {aktivitas} </Text>)}
                            </View>
                        </View>
                        <Right>
                            {mood === 'Idle' ? (<Image source={require('../../img/mood/idle.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Males parah' ? (<Image source={require('../../img/mood/malesparah.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Overload kerjaan' ? (<Image source={require('../../img/mood/overload.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Semangat 45 bekerja' ? (<Image source={require('../../img/mood/semangat45.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Standar' ? (<Image source={require('../../img/mood/standar.png')} style={styles.imageStyle} />) : null}
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
                                {(aktivitas === null) ? (<Text style={{ color: 'white'}}>Tidak Ada Aktivitas</Text>) : (<Text style={{ color: 'white' }}> {aktivitas} </Text>)}
                            </View>
                        </View>
                        <Right>
                            {mood === 'Idle' ? (<Image source={require('../../img/mood/idle.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Males parah' ? (<Image source={require('../../img/mood/malesparah.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Overload kerjaan' ? (<Image source={require('../../img/mood/overload.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Semangat 45 bekerja' ? (<Image source={require('../../img/mood/semangat45.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Standar' ? (<Image source={require('../../img/mood/standar.png')} style={styles.imageStyle} />) : null}
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
                                {(aktivitas === null) ? (<Text style={{ color: '#000'}}>Tidak Ada Aktivitas</Text>) : (<Text style={{ color: '#000' }}> {aktivitas} </Text>)}
                            </View>
                        </View>
                        <Right>
                            {mood === 'Idle' ? (<Image source={require('../../img/mood/idle.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Males parah' ? (<Image source={require('../../img/mood/malesparah.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Overload kerjaan' ? (<Image source={require('../../img/mood/overload.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Semangat 45 bekerja' ? (<Image source={require('../../img/mood/semangat45.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Standar' ? (<Image source={require('../../img/mood/standar.png')} style={styles.imageStyle} />) : null}
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
                                {(aktivitas === null) ? (<Text style={{ color: 'white'}}>Tidak Ada Aktivitas</Text>) : (<Text style={{ color: 'white' }}> {aktivitas} </Text>)}
                            </View>
                        </View>
                        <Right>
                            {mood === 'Idle' ? (<Image source={require('../../img/mood/idle.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Males parah' ? (<Image source={require('../../img/mood/malesparah.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Overload kerjaan' ? (<Image source={require('../../img/mood/overload.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Semangat 45 bekerja' ? (<Image source={require('../../img/mood/semangat45.png')} style={styles.imageStyle} />) : null}
                            {mood === 'Standar' ? (<Image source={require('../../img/mood/standar.png')} style={styles.imageStyle} />) : null}
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
        resizeMode:'contain'
    }
}

export default ListHariPribadi;