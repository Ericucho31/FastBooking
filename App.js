import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './componenets/Screens/Login';
import MainContainer from './navigation/MainContainer';
import DiasDeTrabajo from './componenets/Screens/SettingsOptionsScreens/DiasDeTrabajo';
import { DataProvider } from './componenets/Context/GlobalStateContext';
import { CounterProvider } from './componenets/Context/GlobalStateExample';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DataProvider>

        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={MainContainer} />
          <Stack.Screen name="DiasDeTrabajoSetting" component={DiasDeTrabajo} />
        </Stack.Navigator>

      </DataProvider>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
