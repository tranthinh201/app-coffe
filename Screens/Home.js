import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Swiper from "react-native-swiper";
import { AntDesign } from "@expo/vector-icons";
import Product from "../Data/Product";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function Item({ name, image, onPress, star, price }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.itemProduct}>
        <View style={styles.boxImage}>
          <Text style={{ marginLeft: 5, fontWeight: "bold" }}>
            <AntDesign name="star" size={18} color="#ffbe76" />
            {star}
          </Text>
          <Image style={styles.imageProduct} source={image} />
        </View>
        <View style={styles.boxInfor} onPress={onPress}>
          <Text style={styles.nameProduct}>{name}</Text>
          <Text>{price}đ</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function App({ navigation }) {
  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      image={item.thumb}
      star={item.star}
      price={item.price}
      onPress={() =>
        navigation.navigate("DetailProduct", {
          id: item.id,
          name: item.name,
          thumb: item.thumb,
          price: item.price,
        })
      }
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: 25, width: 25, marginRight: 10 }}
            source={require("../assets/images/sun.png")}
          />
          <Text style={styles.textHeader}>Chào buổi chiều</Text>
        </View>
        <View style={styles.qrCode}>
          <Text
            onPress={() => navigation.navigate("Qr")}
            style={{ height: 50 }}
          >
            <Image
              source={require("../assets/images/code.png")}
              style={styles.qrCodeImg}
            />
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.banner}>
          <View style={styles.itemBanner}>
            <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
              <View style={styles.slide1}>
                <Image
                  style={{ height: "100%", width: "100%" }}
                  source={require("../assets/images/banner1.png")}
                />
              </View>
              <View style={styles.slide2}>
                <Image
                  style={{ height: "100%", width: "100%" }}
                  source={require("../assets/images/banner2.png")}
                />
              </View>
              <View style={styles.slide3}>
                <Image
                  style={{ height: "100%", width: "100%" }}
                  source={require("../assets/images/banner3.jpg")}
                />
              </View>
            </Swiper>
          </View>
        </View>
        <View style={styles.register}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: "#fff",
              padding: 20,
              alignItems: "center",
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
            }}
          >
            <View style={styles.itemSales}>
              <MaterialCommunityIcons
                name="ticket-percent"
                size={50}
                color="#A82F2E"
              />
              <Text style={{ fontWeight: "bold" }}>Ưu đãi</Text>
            </View>
            <View style={styles.itemSales}>
              <FontAwesome5 name="crown" size={50} color="#A82F2E" />
              <Text style={{ fontWeight: "bold" }}>Thử thách</Text>
            </View>
            <View style={styles.itemSales}>
              <Entypo name="heart" size={50} color="#A82F2E" />
              <Text style={{ fontWeight: "bold" }}>Yêu thích</Text>
            </View>
          </View>
        </View>
        <View style={styles.listProductHighlight}>
          <Text style={styles.contentListProduct}>Sản Phẩm Nổi Bật</Text>
          <View style={styles.listProduct}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Product}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.allProduct}>
            <View style={styles.textAllProduct}>
              <Text style={styles.txtProductAll}>
                Khám phá toàn bộ Menu nào!
              </Text>
            </View>
            <TouchableHighlight style={styles.buttonAllProduct}>
              <Text
                style={styles.textButtonProduct}
                onPress={() => navigation.navigate("Danh mục sản phẩm")}
              >
                Menu
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.footer}>
          <Image
            source={require("../assets/images/coffee-cup-footer.png")}
            style={{ height: 50, width: 50, marginBottom: 10 }}
          />
          <Text style={{ fontWeight: "100", color: "#a4b0be" }}>
            Bản tin đến đây là hết. Xin cảm ơn
            <Image
              // source={require("../assets/images/heart.png")}
              style={{ height: 20, width: 20 }}
            />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#FFFBF0",
    paddingLeft: 15,
    paddingRight: 20,
    zIndex: 1000,
  },
  qrCodeImg: {
    width: 30,
    height: 30,
  },
  textHeader: {
    fontSize: 16,
  },
  banner: {
    marginTop: 80,
    position: "relative",
    overflow: "hidden",
    height: 250,
  },
  itemBanner: {
    position: "absolute",
    backgroundColor: "#B3282D",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
  },

  textInforBanner: {
    color: "#FFFF",
    width: 300,
    lineHeight: 19,
    fontWeight: "600",
  },
  buttonBanner: {
    marginTop: 40,
    backgroundColor: "#FFFFFF",
    width: 190,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  textButtonBanner: {
    fontWeight: "700",
    color: "#B3282D",
  },
  iconRightBanner: {
    position: "absolute",
    right: 12,
    top: 12,
    backgroundColor: "#831A22",
    borderRadius: 100,
    padding: 5,
  },
  register: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FFFBF0",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 40,
    paddingBottom: 40,
  },

  imageRegister: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#b2bec3",
    padding: 18,
  },

  // listProductHighlight: {
  //   paddingLeft: 10,
  // },
  contentListProduct: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 10,
    marginLeft: 10,
  },
  imageProduct: {
    width: 170,
    height: 170,
    position: "absolute",
    top: -60,
    right: -30,
    zIndex: 1000,
  },
  itemProduct: {
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#FFF",
    width: 190,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      borderRadius: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 65,
  },
  boxImage: {
    backgroundColor: "#F8F1E7",
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: "row",
    position: "relative",
    height: 120,
  },
  boxInfor: {
    paddingLeft: 10,
    height: 60,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F8F1E7",
  },
  nameProduct: {
    fontWeight: "bold",
    color: "#535c68",
    fontSize: 18,
  },
  allProduct: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
    marginLeft: 10,
  },
  buttonAllProduct: {
    backgroundColor: "#A82F2E",
    borderRadius: 10,
  },
  textButtonProduct: {
    color: "#FFFF",
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 30,
    paddingLeft: 30,
    fontSize: 16,
  },
  txtProductAll: {
    color: "#A82F2E",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    height: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
    width: "100%",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
    width: "100%",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
    width: "100%",
  },

  itemSales: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
