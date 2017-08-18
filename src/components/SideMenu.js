import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import {View,H1} from 'native-base';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <H1>
      <Text
      onPress={() => Actions.keyPengajuanCuti()}
        style={styles.item}
      >
        AJUKAN CUTI
      </Text>
      </H1>
      <H1>
      <Text
      onPress={() => Actions.keyPengajuanCuti()}
        style={styles.item}
      >
        AJUKAN IZIN
      </Text>
      </H1>
      <H1>
      <Text
      onPress={() => Actions.keyPengajuanSakit()}
        style={styles.item}
      >
        AJUKAN SAKIT
      </Text>
      </H1>
      <H1>
      <Text
      onPress={() => Actions.keyPenugasanLembur()}
        style={styles.item}
      >
        PENUGASAN LEMBUR
      </Text>
      </H1>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
