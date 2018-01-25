import React from 'react';
import { AppRegistry } from 'react-native';

import dva from './utils/dva';
import Router from './router';

import { screenTracking } from './utils';

import appModel from './models/app';
import routerModel from './models/router';

const app = dva({
  initialState: {},
  models: [appModel, routerModel],
  onError(e) {
    console.log('onError', e);
  },
  onAction: screenTracking,
});

const App = app.start(<Router />);

AppRegistry.registerComponent('DvaStarter', () => App);
