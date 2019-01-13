import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBootstrapper from './src/screens/AppBootstrapper';

export default class App extends React.Component {
  render() {
    return (
      <AppBootstrapper />
    );
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
