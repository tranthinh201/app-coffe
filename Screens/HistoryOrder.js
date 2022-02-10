import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import Product from "../Data/orderHistory";

const Item = ({ name, thumb, price, date, quantity, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.itemProduct} onPress={onPress}>
        <View style={styles.mainProduct}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text style={styles.nameProduct}>{name}</Text>
            <Text style={styles.icon}>
              <AntDesign name="right" size={20} color="black" />
            </Text>
          </View>
          <View>
            <Text style={styles.title}>{date}</Text>
          </View>
          <View>
            <Image source={thumb} style={{ width: 40, height: 40 }} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={{ marginRight: 20 }}>
              <Text style={styles.title}>Đánh giá</Text>
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="star" size={18} color="#ffeaa7" />
                <AntDesign name="star" size={18} color="#ffeaa7" />
                <AntDesign name="star" size={18} color="#ffeaa7" />
                <AntDesign name="star" size={18} color="#ffeaa7" />
                <AntDesign name="star" size={18} color="#ffeaa7" />
              </View>
            </View>
            <View style={{ marginRight: 20 }}>
              <Text style={styles.title}>Số lượng</Text>
              <Text style={styles.infor}>{quantity} sản phẩm</Text>
            </View>
            <View>
              <Text style={styles.title}>Tổng tiền</Text>
              <Text style={styles.infor}>{price} đ</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function App({ navigation }) {
  const renderItem = ({ item }) => (
    <Item
      name={item.nameProduct}
      thumb={item.thumb}
      price={item.total}
      date={item.date}
      quantity={item.quantity}
      onPress={() =>
        navigation.navigate("Detail", {
          id: item.id,
          nameProduct: item.nameProduct,
          price: item.price,
          date: item.date,
          size: item.size,
          name: item.name,
          priceDelivery: item.priceDelivery,
          distance: item.distance,
          phoneNumber: item.phoneNumber,
          total: item.total,
          discount: item.discount,
          payments: item.payments,
          thumb: item.thumb,
          quantity: item.quantity,
          address: item.address,
        })
      }
    />
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 10,
          left: 0,
          right: 0,
          backgroundColor: "#FFFBF0",
          height: 80,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
          Lịch sử đặt hàng
        </Text>
      </View>

      <View style={{ paddingTop: 95 }}>
        <FlatList
          data={Product}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  boxImage: {
    position: "relative",
    width: 80,
    height: 80,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 100,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imageProduct: {
    height: 100,
    width: 100,
    position: "absolute",
    top: -30,
    left: -10,
  },
  mainProduct: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#FFFBF0",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 5,
    width: "90%",
  },
  boxInfor: {
    width: "45%",
    marginLeft: 30,
  },
  nameProduct: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 5,
  },
  price: {
    fontSize: 19,
    fontWeight: "bold",
  },

  itemProduct: {
    width: "100%",
  },
  title: {
    color: "#b2bec3",
    fontWeight: "bold",
    fontSize: 13,
  },
  infor: {
    color: "#2d3436",
    fontWeight: "700",
  },
});
