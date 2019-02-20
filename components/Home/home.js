import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={styles.containder}>
        <Text style={{ color: "black" }}>Login</Text>
        <Button
          title="button"
          onPress={() => this.props.navigation.navigate("Setting")}
        />
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

export default Home;
