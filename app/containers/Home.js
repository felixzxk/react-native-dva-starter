import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { Button, tabIcon } from '../components';

import { NavigationActions } from '../utils';

@connect()
class Home extends Component {
  static navigationOptions = {
    title: '导航栏标题',
    tabBarLabel: '首页',
    tabBarIcon: tabIcon('home'),
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
