import React from "react";
import { AppRegistry, Text, TextInput, View } from "react-native";
import AddEntry from "./components/AddEntry";
import { Ionicons } from '@expo/vector-icons';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import entries from './store/reducers';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(entries)}>
      <View>
        <AddEntry />
      </View>
      </Provider>
    );
  }
}
