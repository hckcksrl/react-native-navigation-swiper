import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Setting extends Component {
  render() {
    return (
      <View style={styles.containder}>
        <Text>Setting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containder: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Setting;
