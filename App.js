import React from "react";
import { AppRegistry, Text, TextInput, View } from "react-native";
import AddEntry from "./components/AddEntry";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <View style={{ padding: 10 }}>
      
      </View>
    );
  }
}
