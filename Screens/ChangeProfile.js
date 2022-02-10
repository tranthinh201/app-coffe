import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import moUser from "../Model/Login";
import { AntDesign } from "@expo/vector-icons";
const App = ({ route, navigation }) => {
  if (route.params) {
    var { phone } = route.params;
    const user = new moUser(User.FindUserbyPhone(phone));
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
          <Text style={{ marginLeft: 10, fontSize: 15 }}>Trang chủ</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 200,
            backgroundColor: "#FFFBF0",
            position: "relative",
          }}
        >
          <View style={{ position: "relative" }}>
            <Image source={user.avatar} style={{ height: 100, width: 100 }} />
            <View style={{ position: "absolute", bottom: 0, right: 0 }}>
              <EvilIcons name="pencil" size={24} color="blue" />
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          ></View>
        </View>

        <View style={styles.item}>
          <TextInput style={styles.name} value={user.name} />
        </View>
        <View style={styles.item}>
          <TextInput style={styles.name} value={user.phone} />
        </View>
        <View style={styles.item}>
          <TextInput style={styles.name} value={user.diachi} />
        </View>
        <View style={styles.item}>
          <TextInput style={styles.name} value={user.email} />
        </View>
        <View style={styles.item}>
          <TextInput style={styles.name} value={user.gioitinh} />
        </View>

        <View style={styles.button}>
          <TouchableHighlight style={styles.buyAgain}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                padding: 10,
              }}
            >
              Cập nhật thông tin
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#FFFBF0",
            paddingLeft: 10,
            paddingBottom: 10,
            paddingTop: 35,
          }}
        >
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={{ marginLeft: 10, fontSize: 15 }}>Trở về</Text>
        </View>
        <View
          style={{
            color: "black",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "80%",
          }}
        >
          <Text>Chưa đăng nhập</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#FFFBF0",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 35,
  },
  item: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 5,
    borderColor: "#dfe6e9",
    overflow: "hidden",
  },
  text: {
    marginLeft: 10,
    width: 120,
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    fontSize: 16,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  buttonLogout: {
    backgroundColor: "green",
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 30,
  },
  buyAgain: {
    backgroundColor: "#A82F2E",
    borderRadius: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FFFBF0",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default App;
