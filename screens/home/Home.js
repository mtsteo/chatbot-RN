import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import Header from "../../components/Header";
import Colors from "../../styles/Colors";

export default function Home() {
  return (
    <View>
      <View>
        <Header />
      </View>
      <View style={style.titleText}>
      </View>
      <ScrollView>
        <View style={style.container}>
          <TouchableOpacity style={style.buttonsChat}>
            <TouchableOpacity style={style.agentIcon}>
              <FontAwesome name="calendar-plus-o" size={32} color="white" />
            </TouchableOpacity>
            <Text style={style.chatText}>Agendamento de Consultas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.buttonsChat}>
            <TouchableOpacity style={style.agentIcon}>
              <FontAwesome name="calendar-plus-o" size={32} color="white" />
            </TouchableOpacity>
            <Text style={style.chatText}>Agendamento de Consultas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonsChat}>
            <TouchableOpacity style={style.agentIcon}>
              <FontAwesome name="calendar-plus-o" size={32} color="white" />
            </TouchableOpacity>
            <Text style={style.chatText}>Agendamento de Consultas</Text>
          </TouchableOpacity><TouchableOpacity style={style.buttonsChat}>
            <TouchableOpacity style={style.agentIcon}>
              <FontAwesome name="calendar-plus-o" size={32} color="white" />
            </TouchableOpacity>
            <Text style={style.chatText}>Agendamento de Consultas</Text>
          </TouchableOpacity><TouchableOpacity style={style.buttonsChat}>
            <TouchableOpacity style={style.agentIcon}>
              <FontAwesome name="calendar-plus-o" size={32} color="white" />
            </TouchableOpacity>
            <Text style={style.chatText}>Agendamento de Consultas</Text>
          </TouchableOpacity><TouchableOpacity style={style.buttonsChat}>
            <TouchableOpacity style={style.agentIcon}>
              <FontAwesome name="calendar-plus-o" size={32} color="white" />
            </TouchableOpacity>
            <Text style={style.chatText}>Agendamento de Consultas</Text>
          </TouchableOpacity><TouchableOpacity style={style.buttonsChat}>
            <TouchableOpacity style={style.agentIcon}>
              <FontAwesome name="calendar-plus-o" size={32} color="white" />
            </TouchableOpacity>
            <Text style={style.chatText}>Agendamento de Consultas</Text>
          </TouchableOpacity><TouchableOpacity style={style.buttonsChat}>
            <TouchableOpacity style={style.agentIcon}>
              <FontAwesome name="calendar-plus-o" size={32} color="white" />
            </TouchableOpacity>
            <Text style={style.chatText}>Agendamento de Consultas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  chatText: {
    fontSize: 20,
    fontWeight: 700,
    paddingLeft:"5%"
  },
  buttonsChat: {
    // backgroundColor: Colors.mainColors.secundary,
    height: 60,
    width: "95%",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  agentIcon:{
    backgroundColor:Colors.mainColors.primary,
    height:50,
    width:50,
    borderRadius:44,
    justifyContent:"center",
    alignItems:"center"


  }
});
