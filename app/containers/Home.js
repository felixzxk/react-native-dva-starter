import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { Button, tabIcon } from '../components';

import { NavigationActions, createAction } from '../utils';

@connect(({ app, router }) => ({
  app,
  router,
}))
class Home extends Component {
  static navigationOptions = {
    title: '导航栏标题',
    tabBarLabel: '首页',
    tabBarIcon: tabIcon('home'),
  }

  gotoDetail = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Detail',
        action: createAction('app/testSubAction')(),
      })
    );
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
