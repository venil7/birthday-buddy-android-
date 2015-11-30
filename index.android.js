'use strict';

let React = require('react-native');

let Router = require('./components/router');

let Main = require('./components/main');
let Secondary = require('./components/secondary');

let { AppRegistry, Navigator } = React;

class BirthdayBuddy extends React.Component {

  renderScene(route, navigator) {
    switch(route.id) {
      case Router.routes.INDEX: return <Main navigator={navigator} />
      case Router.routes.SECONDARY: return <Secondary navigator={navigator} />
    }
  }

  render() {
    let id = Router.routes.INDEX;
    return (
      <Navigator
        initialRoute={{ id }}
        renderScene={this.renderScene} />
    );
  }

}

AppRegistry.registerComponent('BirthdayBuddy', () => BirthdayBuddy);
