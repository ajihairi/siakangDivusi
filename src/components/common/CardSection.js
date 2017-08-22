import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 8,
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };