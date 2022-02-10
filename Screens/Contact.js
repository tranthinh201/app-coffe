import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function App({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="left"
          size={24}
          color="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={{ marginLeft: 10, fontSize: 15 }}>Liên hệ và góp ý</Text>
      </View>
      <View style={styles.box}>
        <View style={{ backgroundColor: "white", borderRadius: 10 }}>
          <View>
            <TouchableOpacity style={styles.buttonBorder}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather
                  name="phone"
                  size={24}
                  color="black"
                  style={styles.imgIcon}
                />
                <View>
                  <Text>Tổng đài</Text>
                  <Text>0987654321</Text>
                </View>
              </View>

              <AntDesign name="right" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonBorder}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="email-minus-outline"
                  size={24}
                  color="black"
                  style={styles.imgIcon}
                />
                <View>
                  <Text>Email</Text>
                  <Text>thinh@gmail.com</Text>
                </View>
              </View>

              <AntDesign name="right" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonBorder}
              onPress={() =>
                Linking.openURL("https://www.facebook.com/thinh.reply")
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome
                  name="facebook-f"
                  size={24}
                  color="black"
                  style={styles.imgIcon}
                />
                <View>
                  <Text>Facebook</Text>
                  <Text>https://www.facebook.com/thinh.reply</Text>
                </View>
              </View>
              <AntDesign name="right" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonNonBorder}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Octicons
                  name="report"
                  size={24}
                  color="black"
                  style={styles.imgIcon}
                />
                <Text>Gửi góp ý về ứng dung</Text>
              </View>
              <AntDesign name="right" size={22} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#FFFBF0",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 35,
  },
  box: {
    marginTop: 22,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "black",
  },
  imgBanner: {
    height: 30,
    width: 30,
    marginBottom: 10,
  },
  itemBox: {
    width: "49%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  buttonBorder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 0.9,
    paddingBottom: 20,
    paddingTop: 20,
    borderColor: "grey",
  },
  buttonNonBorder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 20,
    paddingTop: 20,
  },
  imgIcon: { height: 22, width: 22, marginRight: 15 },
});
