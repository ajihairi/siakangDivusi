import React, { Component } from 'react';
import {View,Image} from 'react-native';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Text,
    Left,
    H1,
    Card,
    CardItem,
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';


class ItemKehadiran extends Component {
    render() {
        const {
           hari,
           tanggal,
           jamMasuk,
           jamKeluar,
           totalJam,
           status
        } = this.props.library;
        
          return(
            <Card>
                {status === 'Hadir' ? (
                    <View style={styles.Hadir} >
                            
                                <View style={{ height: 40 }}>
                                        <H1 style={{ paddingTop:5,color: 'white' }} onPress={() => Actions.keyDetailKehadiran({ tanggal: tanggal })}>  {tanggal} 
                                    </H1>
                                    <Right><Image source={require('../../img/icons/check_white.png')}style={styles.imageStyle} /></Right>
                                    
                                </View>
                                <View style={{ paddingLeft:5,paddingBottom:5,paddingRight:5,paddingTop:5,height: 30 }}>
                                    <Text style={{ color: 'white' }}>  {jamMasuk} 
                                    {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
                                    {jamKeluar} </Text>
                                </View>
                                <View style={{ paddingLeft:5,paddingBottom:10,paddingRight:5,paddingTop:5,height: 30 }}>
                                    <Text style={{ color: 'white' }}>  {totalJam} </Text>
                                       {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}></Text>)}
                                </View>
                           
                    </View>) : null}
                {status === 'Tidak Hadir' ? (
                    <View style={styles.TidakHadir}>
                    <View style={{ height: 40 }}>
                    <H1 style={{ paddingTop:5,color: 'white' }} onPress={() => Actions.keyDetailKehadiran({ tanggal: tanggal })}>  {tanggal} 
                </H1>
                <Body><Right><Image source={require('../../img/icons/cross_white.png')}style={styles.imageStyle} /></Right></Body>
            </View>
            <View style={{ paddingLeft:5,paddingBottom:5,paddingRight:5,paddingTop:5,height: 30 }}>
                <Text style={{ color: 'white' }}>  {jamMasuk} 
                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
                {jamKeluar} </Text>
                
            
            </View>
            <View style={{ paddingLeft:5,paddingBottom:10,paddingRight:5,paddingTop:5,height: 30 }}>
                <Text style={{ color: 'white' }}>  {totalJam} </Text>
                   {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}></Text>)}
            </View>
           
    </View>) : null}
                {status === 'Libur' ? (
                    <View style={styles.Libur}>
                    <View style={{ height: 40 }}>
                    <H1 style={{ paddingTop:5,color: 'white' }} onPress={() => Actions.keyDetailKehadiran({ tanggal: tanggal })}>  {tanggal} 
                </H1>
                <Body><Right><Image source={require('../../img/icons/holiday_white.png')}style={styles.imageStyle} /></Right></Body>
            </View>
            <View style={{ paddingLeft:5,paddingBottom:5,paddingRight:5,paddingTop:5,height: 30 }}>
                <Text style={{ color: 'white' }}>  {jamMasuk} 
                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
                {jamKeluar} </Text>  
            </View>
            <View style={{ paddingLeft:5,paddingBottom:10,paddingRight:5,paddingTop:5,height: 30 }}>
                <Text style={{ color: 'white' }}>  {totalJam} </Text>
                   {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}></Text>)}
            </View>
           
    </View>) : null}
    {status === 'Cuti' ? (
                    <View style={styles.Cuti}>
                    <View style={{ height: 40 }}>
                    <H1 style={{ paddingTop:5 }} onPress={() => Actions.keyDetailKehadiran({ tanggal: tanggal })}>  {tanggal} 
                </H1>
                <Body><Right><Image source={require('../../img/icons/suitcase_black.png')}style={styles.imageStyle} /></Right></Body>
            </View>
            <View style={{ paddingLeft:5,paddingBottom:5,paddingRight:5,paddingTop:5,height: 30 }}>
                <Text>  {jamMasuk} 
                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text > s/d </Text>)}
                {jamKeluar} </Text>  
            </View>
            <View style={{ paddingLeft:5,paddingBottom:10,paddingRight:5,paddingTop:5,height: 30 }}>
                <Text >  {totalJam} </Text>
                   {(totalJam === null) ? (<Text />) : (<Text></Text>)}
            </View>
           
    </View>) : null}
            </Card>
        )
    }
        
    }


    const styles = {
        Hadir: {
            backgroundColor: '#1abc9c',
            width: 750,
    
        },
        TidakHadir: {
            backgroundColor: '#e74c3c',
            width: 750,
        },
        Libur: {
            backgroundColor: '#f39c12',
            width: 750,
        },
        Cuti: {
            backgroundColor: 'white',
            width: 750,
        },
        PerjalananDinas: {
            backgroundColor: '#f39c12',
            width: 750,
        },
        imageStyle:{
            width: 50,
            height: 50,
        }
    }

export default ItemKehadiran;
