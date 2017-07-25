import React from 'react';
import { View, Platform, DatePickerIOS, TimePickerAndroid } from 'react-native';

const TimePicker = (props) => {
    if (Platform.OS === 'ios') {
        return (
            <View>
                <DatePickerIOS
                    mode={'date'}
                    onDateChange={(e) => props.onSelectTime(e)}
                />
            </View>
        );
    }

    try {
        TimePickerAndroid.open({
            hour: 0,
            minute: 0,
            is24Hour: true,
        })
            .then(e => {
                if (e.action === 'dismissedAction') {
                    console.log('dismiss select');
                }
                if (e.action === 'timeSetAction') {
                    props.onSelectTime(e);
                    console.log('set action');
                }
            })
            .catch(e => console.log(e));
    } catch (error) {
        console.log(error);
    }

    return <View />;
};

export default TimePicker;
