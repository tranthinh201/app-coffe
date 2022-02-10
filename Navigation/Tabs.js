import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image } from "react-native";

import ProfileScreen from "../Screens/Profile";
import HistoryOrderScreen from "../Screens/HistoryOrder";
import HomeScreen from "../Screens/Home";
import QrScreen from "../Screens/QrScreen";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Cart from "../Screens/Cart";
import Detail from "../Screens/DetailOrder";
import DetailProduct from "../Screens/DetailProduct";
import ChangeProfile from "../Screens/ChangeProfile";
import ChangePassword from "../Screens/ChangePassword";
import Contact from "../Screens/Contact";
import Cate from "../Screens/Categrory";
import Ck from "../Screens/Checkout";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Attack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Group>
        <Stack.Screen name="Qr" component={QrScreen} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Infor" component={ProfileScreen} />
        <Stack.Screen name="ChangeProfile" component={ChangeProfile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="checkout" component={Ck} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: { backgroundColor: "papayawhip" },
        tabBarStyle: {
          height: 70,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Trang chủ",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../assets/images/home-new.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#A62B2B" : "#605A53",
                }}
              />
              <Text
                style={{ color: focused ? "#A62B2B" : "#605A53", fontSize: 12 }}
              >
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Order History"
        component={HistoryOrderScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../assets/images/invoices.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#A62B2B" : "#605A53",
                }}
              />
              <Text
                style={{ color: focused ? "#A62B2B" : "#605A53", fontSize: 12 }}
              >
                Hoạt động
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Danh mục sản phẩm"
        component={Cate}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../assets/images/croissant.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#A62B2B" : "#605A53",
                }}
              />
              <Text
                style={{ color: focused ? "#A62B2B" : "#605A53", fontSize: 12 }}
              >
                Đặt hàng
              </Text>
            </View>
          ),
          headerStyle: { backgroundColor: "brown" },
          headerTintColor: "white",
          title: "Danh mục sản phẩm",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../assets/images/cart.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#A62B2B" : "#605A53",
                }}
              />
              <Text
                style={{ color: focused ? "#A62B2B" : "#605A53", fontSize: 12 }}
              >
                Giỏ hàng
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../assets/images/align-left.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#A62B2B" : "#605A53",
                }}
              />
              <Text
                style={{
                  color: focused ? "#A62B2B" : "#605A53",
                  fontSize: 12,
                }}
              >
                Khác
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#0F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Attack;

// Trần Văn Thịnh
