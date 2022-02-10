import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function detaier({ navigation, route }) {
  const {
    id,
    price,
    size,
    date,
    total,
    discount,
    payments,
    nameProduct,
    name,
    thumb,
    quantity,
    distance,
    priceDelivery,
    phoneNumber,
    address,
  } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="x" size={28} color="grey" />
          </TouchableOpacity>
          <FontAwesome5 name="heart" size={25} color="black" />
        </View>
        <View style={styles.image}>
          <Image source={thumb} style={{ width: 200, height: 200 }}></Image>
        </View>
      </View>
      <View
        style={{ flexDirection: "column", alignItems: "center", marginTop: 10 }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 14 }}>{date}</Text>
      </View>
      <ScrollView>
        <View
          style={{
            marginRight: 20,
            marginLeft: 20,
          }}
        >
          <View style={styles.item}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 30,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.marginRight}>{quantity}X</Text>
                <Text style={styles.text}>{nameProduct}</Text>
                <Text style={{ marginLeft: 5 }}>(Size: {size})</Text>
              </View>
              <Text style={styles.text}>{price}</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.box}>
              <Text style={{ marginRight: 20, marginTop: 20 }}>
                Tạm tính ({quantity} món)
              </Text>
              <Text style={{ marginTop: 20 }}>{price}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 10,
              }}
            >
              <Text style={styles.marginRight}>Phí áp dụng: {distance}</Text>
              <Text style={styles.text}>{priceDelivery}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 10,
              }}
            >
              <Text style={{ marginRight: 20, fontSize: 14, color: "red" }}>
                Phiếu giảm giá:
              </Text>
              <Text style={{ fontSize: 14, color: "red" }}>-{discount}</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <View style={styles.box}>
                <Text style={styles.marginRight}>Tổng cộng</Text>
                <Text style={styles.text}>{total}</Text>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <View style={styles.box}>
                <Text style={styles.marginRight}>Thanh toán bằng</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ height: 20, width: 20, marginRight: 5 }}
                    source={require("../assets/images/dong.png")}
                  />
                  <Text style={styles.text}>{payments}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <View style={styles.boxbottom}>
                <Text style={styles.textInfor}>Họ và tên:</Text>
                <Text style={styles.text}>{name}</Text>
              </View>
            </View>
            <View style={styles.stbox}>
              <View style={styles.boxbottom}>
                <Text style={styles.textInfor}>Số điện thoại:</Text>
                <Text style={styles.text}>{phoneNumber}</Text>
              </View>
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={styles.boxbottom}>
                <Text style={styles.textInfor}>Địa chỉ:</Text>
                <Text style={styles.text}>{address}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <TouchableHighlight
          style={styles.buyAgain}
          onPress={() =>
            navigation.navigate("DetailProduct", {
              id: id,
              name: name,
              price: price,
              thumb: thumb,
            })
          }
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
              padding: 10,
            }}
          >
            Mua lại
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
  },
  header: {
    position: "relative",
    backgroundColor: "#FFFBF0",
  },
  icons: {
    position: "absolute",
    flexDirection: "row",
    left: 15,
    right: 15,
    top: 30,
    justifyContent: "space-between",
  },
  image: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#dfe6e9",
    paddingLeft: 4,
    paddingBottom: 2,
    paddingRight: 4,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
  marginRight: {
    marginRight: 20,
  },
  boxbottom: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 10,
  },
  textInfor: {
    width: 100,
  },
  buyAgain: {
    backgroundColor: "#A82F2E",
    borderRadius: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  button: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: "#FFFBF0",
    flexDirection: "column",
    justifyContent: "center",
  },
});
