import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: 'green',
    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: 'orange',
        margin: 10
    }



});

export const FlexDemo = props => (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'green'}} />
      <View style={{flex: 3, backgroundColor: 'blue'}} />
    </View>
  );


class FlexBoxLearning extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box]} />
                <View style={[styles.box]} />
                <View style={[styles.box]} />
                
            </View>
        );
    }
}

export default FlexBoxLearning;