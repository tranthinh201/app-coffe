import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function detaier({ navigation, route }) {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  const onPressminus = () => setCount((prevCount) => prevCount - 1);
  const { name, thumb, price } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.thumb}>
        <ImageBackground
          resizeMode="cover"
          style={styles.background}
          source={thumb}
        >
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="x" size={28} color="grey" />
            </TouchableOpacity>
            <FontAwesome5 name="heart" size={25} color="black" />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.order}>
        <View style={styles.in4}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>{price}</Text>
        </View>
        <Text style={{ paddingTop: 10 }}>
          Giá bán đã bao gồm 7% VAt,áp dụng từ ngày 01/11/2021 đến 31/12/2021
        </Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.op}>
            <Text style={{ color: "white" }}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.op}>
            <Text>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.op}>
            <Text>L</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 30, alignItems: "center" }}>
        <View style={styles.sl}>
          <TouchableOpacity onPress={onPressminus}>
            <Feather name="minus-circle" size={30} color="brown" />
          </TouchableOpacity>
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 20, color: "brown" }}>{count}</Text>
          </View>
          <TouchableOpacity onPress={onPress}>
            <Feather name="plus-circle" size={30} color="brown" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Thêm vào giỏ: {price}đ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
  },
  thumb: {
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: 400,
    backgroundColor: "#f5eedc",
  },
  icons: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  order: {
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 6, height: 0 },
  },
  in4: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
  op: {
    backgroundColor: "#ebb467",
    padding: 20,
    borderRadius: 10,
  },
  sl: {
    flexDirection: "row",
  },
  btn: {
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: "brown",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
  },
});
