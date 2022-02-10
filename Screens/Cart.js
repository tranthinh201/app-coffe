import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Product = [
  {
    id: "1",
    image: require("../assets/images/cafe1.png"),
    name: "Trà Sen Vàng",
    price: "24000đ",
    color: "red",
  },
  {
    id: "2",
    image: require("../assets/images/freeze1.png"),
    name: "Freeze Trà Xanh",
    price: "245.000đ",
    color: "yellow",
  },
  {
    id: "3",
    image: require("../assets/images/cafe5.png"),
    name: "Trà Thạch Vải",
    price: "241.000đ",
    color: "pink",
  },
  {
    id: "4",
    image: require("../assets/images/cafe5.png"),
    name: "Trà Thạch Vải",
    price: "241.000đ",
    color: "pink",
  },
  {
    id: "5",
    image: require("../assets/images/cafe5.png"),
    name: "Trà Thạch Vải",
    price: "241.000đ",
    color: "pink",
  },
  {
    id: "6",
    image: require("../assets/images/cafe5.png"),
    name: "Trà Thạch Vải",
    price: "241.000đ",
    color: "pink",
  },
];

const Item = ({ name, image, price }) => (
  <View style={styles.itemProduct}>
    <View style={styles.mainProduct}>
      <View style={styles.boxImage}>
        <Image style={styles.imageProduct} source={image} />
      </View>
      <View style={styles.boxInfor}>
        <Text style={styles.nameProduct}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.function}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 100,
            padding: 2,
            shadowColor: "grey",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <TouchableOpacity>
            <AntDesign name="plus" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 1 }}>
          <Text> 1</Text>
        </View>
        <View
          style={{ backgroundColor: "#A82F2E", borderRadius: 100, padding: 2 }}
        >
          <TouchableOpacity>
            <AntDesign name="minus" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default function App({ navigation }) {
  const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);
  // const onPressminus = () => setCount(prevCount => prevCount - 1);
  const renderItem = ({ item }) => (
    <Item name={item.name} image={item.image} price={item.price} />
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: 10,
          width: "45%",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: "brown" }}>
          Giỏ hàng của bạn
        </Text>
      </View>

      <FlatList
        data={Product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ paddingTop: 90 }}
      />

      <View style={styles.footter}>
        <View style={styles.totalProduct}>
          <Text>Tạm tính:</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
            2212.000đ
          </Text>
        </View>
        <View style={styles.checkout}>
          <TouchableOpacity onPress={() => navigation.navigate("checkout")}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 16, color: "white", padding: 3 }}>
                THANH TOÁN
              </Text>
              <EvilIcons name="arrow-right" size={29} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffafa",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 15,
    // paddingTop: 10,
    // paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    width: "90%",
    backgroundColor: "#FFFBF0",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 3 },
  },
  boxInfor: {
    width: "35%",
    marginLeft: 30,
  },
  nameProduct: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 5,
  },
  price: {
    fontSize: 17,
    fontWeight: "200",
    color: "grey",
  },
  function: {
    flexDirection: "column",
    justifyContent: "center",
    width: 30,
    alignItems: "center",
  },
  footter: {
    position: "absolute",
    backgroundColor: "#FFF",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  checkout: {
    backgroundColor: "#A82F2E",
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 7 },
  },
  itemProduct: {
    width: "100%",
    paddingBottom: 17,
  },
});
