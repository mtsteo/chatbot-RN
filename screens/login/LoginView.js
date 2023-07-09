import * as React from "react";
import LoginScreen from "react-native-login-screen";
import { View, Text, Button } from "react-native";

export function LoginView({ navigation }) {
  const [password, setPassword] = React.useState("");
  const [cpf, setCpf] = React.useState("");

  const loginHandle = () =>{
    navigation.navigate("Home")
  }

  return (
      <LoginScreen
        style={{backgroundColor:"#ffffff"}}
        onCpfChange={(value) => {
          setCpf(value);
        }}
        passwordPlaceholder="Digite sua senha..."
        onPasswordChange={(value)=>{setPassword(value)}}
        disableSocialButtons
        disableDivider
        disableCpfValidation={true}
        disableSignup
        onLoginPress={loginHandle}
      />
  );
}
