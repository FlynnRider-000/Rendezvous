import React from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import Root from './src/Root'
// import {Font} from 'expo';
import { MenuProvider } from 'react-native-popup-menu';
export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Font.loadAsync({
    //   'Arial Rounded MT Bold': require('./assets/fonts/ARLRDBD.ttf'),
    // });
  }

  render() {
    return (
      <MenuProvider>
        <Root />
      </MenuProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
