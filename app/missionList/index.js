import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Button, tabIcon } from '../components';

import { NavigationActions } from '../utils';

@connect()
class Missions extends Component {
  static navigationOptions = {
    title: 'Missions',
    tabBarLabel: '任务列表',
    tabBarIcon: tabIcon('book'),
  }

  componentWillMount() {
    console.log('componentWillMount+++', this.props);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount---', this.props);
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="Goto Detail" onPress={this.gotoDetail} />
      </View>
    );
  }
}

export default Missions;
