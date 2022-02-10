import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Cafe from "../Cates/cafe";
import Fre from "../Cates/freeze";
import Tea from "../Cates/tra";
import Other from "../Cates/khac";
const Head = createMaterialTopTabNavigator();

export default function Cate() {
  return (
    <Head.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e32f54",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "white" },
      }}
    >
      <Head.Screen name="Cà phê" component={Cafe} />
      <Head.Screen name="Freeze" component={Fre} />
      <Head.Screen name="Trà" component={Tea} />
      <Head.Screen name="khác" component={Other} />
    </Head.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
