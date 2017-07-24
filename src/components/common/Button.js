/*
code by hamzhya tinnov (c) 2017
*/

import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

const Button = ({ onPress, children, style, styleText }) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity
            style = {[buttonStyle, style]}
            onPress = {onPress}
        >
            <Text style={[textStyle, styleText]}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle : {
        flex : 1,
        alignSelf: 'stretch',
        backgroundColor : '#fff',
        borderRadius : 5,
        borderWidth : 1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5
    },
    textStyle : {
        alignSelf: 'center',
        color : '#007aff',
        fontSize: 16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom : 10
    }
}

export {Button};
