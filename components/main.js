'use strict';

let React = require('react-native');
let styles = require('./styles');

let {
  Text,
  View,
  TouchableNativeFeedback,
  ToastAndroid
} = React;

class Main extends React.Component {
  onClick() {
    ToastAndroid.show('Switching view..', ToastAndroid.SHORT);
    this.props.navigator.push({id: 1});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is the meain component.
        </Text>
        <TouchableNativeFeedback onPress={this.onClick.bind(this)}>
          <View>
            <Text>next view..</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

module.exports = Main;