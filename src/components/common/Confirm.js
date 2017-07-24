/*
code by hamzhya tinnov (c) 2017
*/
import React from 'react';
import {
    View,
    Text,
    Modal
} from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline, title }) => {
    const { insideContainerStyle, containerStyle, textStyle, cardSectionStyle, titleStyle } = styles;
    return(
        <Modal
            visible={visible}
            transparent
            animationType= "slide"
            onRequestClose = {() => {}}
        >
            <View
                style = {containerStyle}
            >
                <View style = {insideContainerStyle}>
                    <CardSection>
                        <Text style = {titleStyle}>{title}</Text>
                    </CardSection>
                    <CardSection style = {cardSectionStyle}>
                        <Text style = {textStyle}>{children}</Text>
                    </CardSection>
                    <CardSection style = {cardSectionStyle}>
                        <Button onPress = {onAccept}>Yes</Button>
                        <Button onPress = {onDecline}>No</Button>
                    </CardSection>
                </View>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle : {
        padding : 15,
        borderBottomWidth : 0
    },
    titleStyle :{
        fontSize :20,
        color : '#007aff',
        padding : 15
    },
    textStyle : {
        flex : 1,
        fontSize : 18,
        textAlign : 'center',
        lineHeight : 40
    },
    containerStyle : {
        backgroundColor : 'rgba(0, 0, 0, 0.75)',
        position : 'relative',
        flex : 1,
        justifyContent : 'center'
    },
    insideContainerStyle : {
        backgroundColor : 'rgba(255, 255, 255, 1)',
        margin : 20,
        justifyContent : 'center'
    }
};

export { Confirm };
