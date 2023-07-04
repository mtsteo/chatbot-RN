import * as React from "react";
import LoginScreen from 'react-native-login-screen'
import { View, Text, Button } from "react-native";

export function LoginView({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LoginScreen
      disableSocialButtons
      disableDivider
      disableEmailValidation
      onLoginPress={() => navigation.navigate("Chatbot")
      }
      
      />
    </View>
  );
}
