import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Header from "../../components/Header";
import Colors from "../../styles/Colors";

export default function Home({ navigation }) {
  return (
    <View>
      <View>
        <Header />
      </View>
      {/* <View style={style.titleText}>
        <Text style={style.chatText}>Chats</Text>
      </View> */}
      <View >
        <ScrollView style={style.ScrollView}>
          <TouchableOpacity
            style={style.buttonsChat}
            onPress={() => navigation.navigate("Chatbot")}
          >
            <TouchableOpacity style={style.agentIcon}>
              <FontAwesome name="calendar-plus-o" size={24} color="white" />
            </TouchableOpacity>
            <Text style={style.optionsText}>Agendamento de Consultas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.buttonsChat}>
            <TouchableOpacity style={style.agentIcon}>
              <MaterialIcons name="science" size={24} color="white" />
            </TouchableOpacity>
            <Text style={style.optionsText}>Resultados de Exames</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.buttonsChat}>
            <TouchableOpacity style={style.agentIcon}>
              <MaterialCommunityIcons
                name="table-eye"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <Text style={style.optionsText}>Meus Agendamentos</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
  },
  titleText: {
    justifyContent: "center",
    alignItems: "center",
  },
  optionsText: {
    fontSize: 20,
    fontWeight: 700,
    paddingLeft: "5%",
  },
  buttonsChat: {
    // backgroundColor: Colors.mainColors.secundary,
    height: 60,
    width: "95%",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    marginLeft: "2%",
    marginTop: "2%",
  },
  agentIcon: {
    backgroundColor: Colors.mainColors.primary,
    height: 50,
    width: 50,
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
  },
  chatText: {
    fontSize: 20,
    fontWeight: 700,
  },
  ScrollView: {
    marginTop: "5%",
  },
});
