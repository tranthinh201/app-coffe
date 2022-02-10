import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function checkout({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack("")}>
          <Entypo name="chevron-thin-left" size={24} color="grey" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 20, paddingLeft: 30 }}>
          Thanh toán
        </Text>
        <Text style={{ fontWeight: "500", paddingTop: 5, color: "#c7a24c" }}>
          Xóa tất cả
        </Text>
      </View>
      <View style={styles.main}>
        <ScrollView>
          <View style={styles.getinfo}>
            <View style={styles.first}>
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: "bold",
                  color: "#c7a24c",
                  paddingRight: 50,
                }}
              >
                Đến lấy
              </Text>
              <TouchableOpacity style={styles.option1}>
                <Text style={{ color: "grey" }}>TẠI QUÁN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                //
                style={styles.option2}
              >
                <Text style={{ color: "white" }}>MANG ĐI</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.location}>
              <Ionicons name="location-outline" size={24} color="#c7a24c" />
              <View style={{ paddingRight: 120 }}>
                <Text
                  style={{ color: "brown", fontSize: 16, fontWeight: "500" }}
                >
                  Xin chọn quán
                </Text>
                <Text style={{ color: "brown", fontSize: 12 }}>
                  Bạn cần chọn một quán để tiếp tục
                </Text>
              </View>
              <Entypo name="chevron-thin-down" size={15} color="grey" />
            </View>
            <View style={styles.location}>
              <EvilIcons name="user" size={25} color="#c7a24c" />
              <View style={{ paddingRight: 175 }}>
                <Text style={{ color: "grey", fontSize: 16 }}>
                  Chưa có Tên liên hệ
                </Text>
                <Text style={{ color: "black", fontSize: 15 }}>0344701313</Text>
              </View>
              <Text style={{ color: "#c7a24c" }}>Sửa</Text>
            </View>
            <View style={styles.location}>
              <EvilIcons name="clock" size={25} color="#c7a24c" />
              <View style={{ paddingRight: 180 }}>
                <Text style={{ color: "grey", fontSize: 16 }}>
                  Thời gian lấy hàng
                </Text>
              </View>
              <Entypo name="chevron-thin-down" size={15} color="grey" />
            </View>
            <View style={styles.location}>
              <EvilIcons name="calendar" size={24} color="#c7a24c" />
              <View style={{ paddingRight: 210 }}>
                <Text style={{ color: "grey", fontSize: 16 }}>Ghi chú món</Text>
              </View>
              <Text style={{ color: "#c7a24c" }}>Sửa</Text>
            </View>
          </View>
          <View style={styles.product}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>Món</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("danh muc san pham")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#c7a24c",
                      fontSize: 14,
                      fontWeight: "500",
                      padding: 6,
                    }}
                  >
                    Thêm
                  </Text>
                  <FontAwesome name="plus-square-o" size={27} color="#c7a24c" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                style={{ width: 60, height: 50 }}
                source={require("../assets/images/cafe1.png")}
              />
              <Text
                style={{
                  color: "#c7a24c",
                  borderColor: "#c7a24c",
                  borderWidth: 0.5,
                  padding: 5,
                  position: "absolute",
                  left: 65,
                  top: 10,
                  borderRadius: 6,
                }}
              >
                1
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", paddingLeft: 15 }}
              >
                Bạc Xỉu
              </Text>
              <View
                style={{
                  flexDirection: "column",
                  position: "absolute",
                  bottom: 0,
                  left: 88,
                }}
              >
                <Text style={{ color: "grey" }}>Size S,Đá</Text>
                <Text style={{ color: "grey", fontSize: 13, paddingTop: 2 }}>
                  Không có ghi chú
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                56.449đ
              </Text>
            </View>
            <View style={styles.item}>
              <Image
                style={{ width: 60, height: 50 }}
                source={require("../assets/images/freeze1.png")}
              />
              <Text
                style={{
                  color: "#c7a24c",
                  borderColor: "#c7a24c",
                  borderWidth: 0.5,
                  padding: 5,
                  position: "absolute",
                  left: 65,
                  top: 10,
                  borderRadius: 6,
                }}
              >
                1
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", paddingLeft: 15 }}
              >
                Freeze trà xanh
              </Text>
              <View
                style={{
                  flexDirection: "column",
                  position: "absolute",
                  bottom: 0,
                  left: 88,
                }}
              >
                <Text style={{ color: "grey" }}>Size S</Text>
                <Text style={{ color: "grey", fontSize: 13, paddingTop: 2 }}>
                  Không có ghi chú
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                56.449đ
              </Text>
            </View>
          </View>
          <View style={styles.total}>
            <Text>
              Giá đã bao gồm 6% VAt,áp dụng từ ngày 01/12/2021 đến ngày
              31/12/2021 trừ sản phẩm đóng gói
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
              }}
            >
              <Text style={{ color: "grey" }}>Tạm tính</Text>
              <Text style={{ color: "grey" }}>56.449đ</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Tổng cộng (2 món)
              </Text>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>56.449đ</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.checkout}>
        <View style={styles.icon}>
          <TouchableOpacity>
            <FontAwesome name="credit-card" size={24} color="#c7a24c" />
          </TouchableOpacity>
          <Text
            style={{
              paddingRight: "26%",
              paddingLeft: 5,
              paddingTop: 5,
              fontSize: 16,
            }}
          >
            Thẻ nội địa
          </Text>
          <TouchableOpacity>
            <FontAwesome name="ticket" size={24} color="#c7a24c" />
          </TouchableOpacity>
          <Text style={{ paddingLeft: 5, paddingTop: 5, fontSize: 16 }}>
            Thêm ưu đãi
          </Text>
        </View>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => Alert.alert("Bạn chưa chọn quán")}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Đặt 2 món: 145.264đ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0ddd5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 13,
    width: "100%",
    paddingTop: "10%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 5 },
  },
  checkout: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    padding: 20,
    paddingBottom: 60,
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 5, height: 0 },
  },
  icon: {
    flexDirection: "row",
  },
  touch: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "90%",
    borderRadius: 10,
    backgroundColor: "grey",
  },
  main: {
    marginTop: 5,
    flex: 5,
  },
  getinfo: {
    backgroundColor: "#fff",
  },
  first: {
    flexDirection: "row",
    padding: 10,
  },
  option1: {
    backgroundColor: "#ebe7dd",
    borderRadius: 10,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  option2: {
    backgroundColor: "#c7a24c",
    borderRadius: 10,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  location: {
    padding: 10,
    marginTop: 10,
    borderTopWidth: 0.5,
    borderColor: "#C0C0C0",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  product: {
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 15,
    // justifyContent:'space-between',
  },
  item: {
    borderTopWidth: 0.5,
    borderColor: "#C0C0C0",
    flexDirection: "row",
    padding: 13,
    marginBottom: 10,
  },
  total: {
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 15,
  },
});
