/*
code by hamzhya tinnov (c) 2017
*/
// import libs
import React from 'react';
import {Text, TextInput, View} from 'react-native';

//make component

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, returnKeyType }) => {
    const { viewStyle, inputStyle, textStyle } = styles
    return (
        <View style = {viewStyle}>
            <Text style={textStyle}>
                {label}
            </Text>
            <TextInput
                returnKeyType = {returnKeyType}
                keyboardType = {keyboardType}
                secureTextEntry = {secureTextEntry}
                underlineColorAndroid= 'rgba(0,0,0,0)'
                placeholder = {placeholder}
                autoCorrect = {false}
                style = { inputStyle }
                value = { value }
                onChangeText = { onChangeText }
            />
        </View>
    );
}

const styles = {
    viewStyle:{
        height : 40,
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center'
    },
    inputStyle : {
        color:'#000',
        paddingRight : 5,
        paddingLeft : 5,
        fontSize : 18,
        lineHeight : 23,
        flex : 2
    },
    textStyle:{
        fontSize : 18,
        paddingLeft : 20,
        flex : 1
    }
}

//make compopnent available to other part of the app
export {Input};
