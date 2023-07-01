import * as React from "react";

import { View, Text, Button } from "react-native";

export function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Entrar" onPress={() => navigation.navigate("Chatbot")} />
    </View>
  );
}
