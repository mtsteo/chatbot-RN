import { Chat } from './screens/chat/Chat';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

function StackChat (){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Chatbot' component={Chat}/>
    </Stack.Navigator>
  )
}

function RootNavigator(){
  return(
    <NavigationContainer>
      <StackChat/>
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <RootNavigator/>
  );
}

