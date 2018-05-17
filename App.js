import React from "react";
import { AppRegistry, Text, TextInput, View } from "react-native";
import AddEntry from "./components/AddEntry";
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}
