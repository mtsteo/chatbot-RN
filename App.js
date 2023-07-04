import { Chat } from "./screens/chat/Chat";
import { LoginView } from "./screens/login/LoginView";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chatbot">
        <Stack.Screen name="Login" component={LoginView} options={{headerShown:false}} />
        <Stack.Screen name="Chatbot" component={Chat} options={{title:"Assistente"} } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}
