import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

class Swipe extends Component {
  render() {
    return (
      <View style={styles.containder}>
        <Swiper height={240}>
          <Image
            style={styles.image}
            source={require("../../assets/flower1.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/flower2.png")}
          />
          <Image style={styles.image} source={require("../../assets/1.png")} />
          <Image
            style={styles.image}
            source={require("../../assets/flower3.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/flower4.png")}
          />
        </Swiper>
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
  },
  image: {
    flex: 1,
    width: Dimensions.get("window").width
  }
});

export default Swipe;
