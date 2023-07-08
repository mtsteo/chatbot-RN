import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import Colors from "../styles/Colors";

const statusBarHeight = StatusBar.currentHeight + 150;
export default function Header() {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text style={style.userName}>Olá, Beltrano!</Text>
        <TouchableOpacity style={style.userButton}>
          <AntDesign name="user" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainColors.primary,
    height: statusBarHeight,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userButton: {
    height: 44,
    width: 44,
    backgroundColor: Colors.mainColors.secundary,
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    color: Colors.mainColors.white,
    fontSize: 30,
  },
});
