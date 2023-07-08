import { Chat } from "./screens/chat/Chat";
import { LoginView } from "./screens/login/LoginView";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home/Home";
import Colors from "./styles/Colors";


const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chatbot"
          component={Chat}
          options={{
            title: "Assistente",
            headerStyle: {
              backgroundColor: Colors.mainColors.primary,
            },
            headerTintColor:Colors.mainColors.white
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}

