'use strict';

let React = require('react-native');
let styles = require('./styles');

let {
  Text,
  View,
  TouchableNativeFeedback,
  ToastAndroid
} = React;

class Secondary extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is the secondary component.
        </Text>
      </View>
    );
  }
}

module.exports = Secondary;