import React from "react";
import { View, Image, ScrollView, SafeAreaView } from "react-native";
import { DrawerItems } from "react-navigation";

const Content = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("../../assets/icon.png")}
        style={{ height: 120, width: 120, borderRadius: 60 }}
      />
    </View>

    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);
export default Content;
