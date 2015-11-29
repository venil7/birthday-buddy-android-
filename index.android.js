'use strict';

let React = require('react-native');

let Main = require('./components/main');
let Secondary = require('./components/secondary');

let { AppRegistry, Navigator } = React;

class BirthdayBuddy extends React.Component {

  renderScene(route, navigator) {
    switch(route.id) {
      case 0: return <Main navigator={navigator} />
      case 1: return <Secondary navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 0, }}
        renderScene={this.renderScene} />
    );
  }

}

AppRegistry.registerComponent('BirthdayBuddy', () => BirthdayBuddy);
