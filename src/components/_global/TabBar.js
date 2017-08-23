import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import {Icon} from 'native-base';

import appStyle from '../../values/appStyle';

import * as appActions from './app.actions';

const wWidth = Dimensions.get('window').width;


class TabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: this.props.app.tab
    };
  }

  onMenuClicked() {
    this.props.actions.tabChanged('menu');
    this.props.navigator.resetTo({
      screen: 'siakang.Menu',
      animated: false,
      navigatorStyle: appStyle.navigator2Style
    });
  }

  onProfileClicked() {
    this.props.actions.tabChanged('profile');
    this.props.navigator.resetTo({
      screen: 'siakang.Profile',
      title: 'My Profile',
      animated: false,
      navigatorStyle: appStyle.navigator2Style
    });
  }

  renderMenuButton() {
    if (this.state.page === 'menu') {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#3498db',
            paddingVertical: 2
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              width: null,
              height: null,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon
              name='apps'
              style={{color: 'white'}}
            />
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                color: '#ffffff'
              }}
            >
              Menu
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          paddingVertical: 4
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            width: null,
            height: null,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={this.onMenuClicked.bind(this)}
        >
          <Icon name='apps'
            style={{ color: 'dodgerblue'}}
          />
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              color: '#3498db'
            }}
          >
            Menu
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderProfileButton() {
    if (this.state.page === 'profile') {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#3498db',
            paddingVertical: 4
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              width: null,
              height: null,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon name='person'
              style={{ color:'white' }}
            />
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                color: '#ffffff'
              }}
            >
              My Profile
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          paddingVertical: 4
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            width: null,
            height: null,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={this.onProfileClicked.bind(this)}
        >
            <Icon name='person'
            style={{ color:'dodgerblue' }}
          />
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              color: '#3498db'
            }}
          >
            My Profile
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  render() {
    return (
      <View
        style={{
          width: wWidth,
          height: 64,
          backgroundColor: '#3498db',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        {this.renderMenuButton()}
        {this.renderProfileButton()}
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
	return {
    actions: bindActionCreators(appActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
