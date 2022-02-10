import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App({ navigation, route }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textHeader}>Tiện ích</Text>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Order History")}
          >
            <Image
              style={styles.imgBanner}
              source={require("../assets/images/note.png")}
            />
            <Text style={styles.text}>Lịch sử đơn hàng</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View style={styles.itemBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChangePassword")}
            >
              <Image
                style={styles.imgBanner}
                source={require("../assets/images/padlock.png")}
              />
              <Text style={styles.text}>Đổi mật khẩu</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemBox}>
            <Image
              style={styles.imgBanner}
              source={require("../assets/images/documents.png")}
            />
            <Text style={styles.text}>Điều khoản</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.textHeader}>Hỗ trợ</Text>
        <View style={{ backgroundColor: "white", borderRadius: 10 }}>
          <View style={styles.buttonBorder}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={styles.imgIcon}
                source={require("../assets/images/favourite.png")}
              />
              <Text>Đánh giá đơn hàng</Text>
            </View>
            <AntDesign name="right" size={22} color="black" />
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonNonBorder}
              onPress={() => navigation.navigate("Contact")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.imgIcon}
                  source={require("../assets/images/sticky-note.png")}
                />
                <Text>Liên hệ và góp ý</Text>
              </View>

              <AntDesign name="right" size={22} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.textHeader}>Tài khoản</Text>
        <View style={{ backgroundColor: "white", borderRadius: 10 }}>
          <View>
            <TouchableOpacity
              style={styles.buttonBorder}
              onPress={() => navigation.navigate("ChangeProfile")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.imgIcon}
                  source={require("../assets/images/usercolor.png")}
                />
                <Text>Thông tin cá nhân</Text>
              </View>

              <AntDesign name="right" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonBorder}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={styles.imgIcon}
                source={require("../assets/images/save-file.png")}
              />
              <Text>Địa chỉ đã lưu</Text>
            </View>

            <AntDesign name="right" size={22} color="black" />
          </View>
          <View style={styles.buttonBorder}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={styles.imgIcon}
                source={require("../assets/images/gear.png")}
              />
              <Text>Cài đặt</Text>
            </View>

            <AntDesign name="right" size={22} color="black" />
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonNonBorder}
              onPress={() => {
                navigation.navigate("login");
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.imgIcon}
                  source={require("../assets/images/logout.png")}
                />
                <Text>Đăng xuất</Text>
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
  container: {},
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
