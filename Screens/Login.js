import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import moUser from "../Model/Login";
import { Feather } from "@expo/vector-icons";
export default function App({ navigation }) {
  const [txtUserName, onChangeUserName] = React.useState();
  const [txtPassWord, onChangePassWord] = React.useState();
  function Validate() {
    const user = new moUser(User.FindUserbyPhone(txtUserName));
    if (txtUserName == user.phone && txtPassWord == user.password)
      navigation.navigate("ChangeProfile", { phone: txtUserName });
    else Alert.alert("Tài khoản hoặc mật khẩu không đúng!");
  }
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 10 }}
        >
          <Feather name="x" size={28} color="grey" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentLogin}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 22,
            textTransform: "uppercase",
            color: "#B3282D",
          }}
        >
          Tiệm Coffe Omicron
        </Text>
      </View>
      <View style={styles.login}>
        <View style={styles.boxLogin}>
          <View style={styles.itemLogin}>
            <Text style={{ fontSize: 16 }}>Số điện thoại</Text>
            <View style={styles.boxInput}>
              <View style={styles.inputR}>
                <Image
                  source={require("../assets/images/smartphone.png")}
                  style={styles.img}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại"
                keyboardType="numeric"
                onChangeText={onChangeUserName}
              />
            </View>
          </View>
          <View style={styles.itemLogin}>
            <Text style={{ fontSize: 16 }}>Mật khẩu</Text>
            <View style={styles.boxInput}>
              <View style={styles.inputR}>
                <Image
                  source={require("../assets/images/lock.png")}
                  style={styles.img}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                }}
              >
                <Image
                  source={require("../assets/images/view.png")}
                  style={styles.img}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Nhập mật khẩu"
               
                secureTextEntry={true}
                onChangeText={onChangePassWord}
              />
            </View>
          </View>
          <TouchableHighlight style={styles.buttonLogin} onPress={Validate}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
              }}
            >
              ĐĂNG NHẬP
            </Text>
          </TouchableHighlight>
          <View style={styles.register}>
            <Text>Bạn chưa có tài khoản? </Text>
            <Text
              style={{
                color: "#B3282D",
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
              onPress={() => navigation.navigate("Register")}
            >
              Đăng ký ngay
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBF0",
  },
  contentLogin: {
    paddingTop: 50,
    backgroundColor: "#FFFBF0",
    paddingBottom: 50,
  },
  login: {
    height: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  boxLogin: {
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 20,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    paddingRight: 20,
    paddingLeft: 40,
    paddingBottom: 5,
    paddingTop: 10,
    fontSize: 16,
    borderColor: "#B3282D",
  },
  itemLogin: {
    marginBottom: 20,
  },
  buttonLogin: {
    backgroundColor: "#B3282D",
    borderRadius: 100,
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  boxInput: {
    position: "relative",
  },
  register: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  inputR: {
    borderRightWidth: 0.8,
    position: "absolute",
    bottom: 10,
    left: 5,
    borderColor: "gray",
  },
  img: {
    width: 20,
    height: 20,
  },
  psab: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
