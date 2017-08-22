import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={style.containerStyle}>
            {props.children}
        </View>
    );
};

const style = {
    containerStyle: {
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export { Card };