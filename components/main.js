'use strict';

let React = require('react-native');
let styles = require('./styles');

let {
  Text,
  View,
  ToastAndroid,
  NativeModules,
  TouchableNativeFeedback,
} = React;

class Main extends React.Component {

  onNavigateClick(id) {
    ToastAndroid.show('Switching view..', ToastAndroid.SHORT);
    this.props.navigator.push({ id });
  }

  onDateClick() {
    let none = () => {};
    NativeModules.DateAndroid.showDatepicker(none, (year, month, day) => {
      let message = `Date picked - ${year}/${month}/${day}`;
      ToastAndroid.show(message, ToastAndroid.SHORT);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is the MAIN component.
        </Text>
        <TouchableNativeFeedback onPress={this.onNavigateClick.bind(this, 1)}>
          <View>
            <Text>next view..</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.onDateClick.bind(this)}>
          <View>
            <Text>pick a date..</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

module.exports = Main;