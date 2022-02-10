import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={28} color="grey" />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/linkqr.png")}
        style={{ height: 400, width: 400 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    position: "absolute",
    top: 35,
    left: 20,
  },
});
