import { ChatAgendamento } from "./screens/chat/ChatAgendamento";
import { LoginView } from "./screens/login/LoginView";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home/Home";
import Colors from "./styles/Colors";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Chatbot"
          component={ChatAgendamento}
          options={{
            title: "Agendamento de Consulta",
            headerStyle: {
              backgroundColor: Colors.mainColors.primary,
            },
            headerTintColor: Colors.mainColors.white,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}
