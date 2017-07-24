/*
code by hamzhya tinnov (c) 2017
*/
// import libs
import React from 'react';
import {Text, View} from 'react-native';

//make component

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent : 'center',
        alignItems : 'center',
        height : 55,
        shadowColor : '#000',
        shadowOffset : {width : 0, height : 2},
        shadowOpacity: 0.2,
        elevation : 2,
        position : 'relative'
    },

    textStyle:{
        fontSize : 20
    }
}

//make compopnent available to other part of the app
export {Header};
