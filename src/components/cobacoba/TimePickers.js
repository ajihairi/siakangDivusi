import React, {
  AppRegistry,
  Component,
  View,
  StyleSheet
} from 'react-native';

import TimePicker from 'react-native-timepicker';

export default class TimePickers extends Component {
  constructor() {
    super();
  }

  _onValueChange = (hour, minute) => {
    console.log("Selected time:", hour, ':', minute);
  };

  render() {
    return (
      <View style={styles.container}>
        <TimePicker
        style={styles.picker}
        selectedHour={0}
        selectedMinute={30}
        minuteInterval={5}
        onValueChange={this._onValueChange}
        loop={true} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9'
  },

  picker: {
    backgroundColor: '#E5E5E5'
  }
});
