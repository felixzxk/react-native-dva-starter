import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const LIST = require('../images/mission.png');
const MY = require('../images/user.png');
const GROUP = require('../images/group.png');
const BOOK = require('../images/book.png');

function sourceSelect(type) {
  switch (type) {
    case 'home':
      return LIST;
    case 'my':
      return MY;
    case 'group':
      return GROUP;
    case 'book':
      return BOOK;
    default:
      return null;
  }
}

export default (type, mytintColor, color = 'gray') => ({
  focused,
  tintColor,
}) => (
  <Image
    style={[
      styles.icon,
      { tintColor: focused ? mytintColor || tintColor : color },
    ]}
    source={sourceSelect(type)}
  />
);
