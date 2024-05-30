
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './componenets/Screens/Login';
import MainContainer from './navigation/MainContainer';
import { DataProvider, useDataContext } from './componenets/Context/GlobalStateContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();

const MainApp = createNativeStackNavigator();

function InsideMainApp() {
  return (
    <MainApp.Navigator screenOptions={{ headerShown: false }}>
      <MainApp.Screen name="MainComponent" component={MainContainer} />
    </MainApp.Navigator>
  )
}

function MainAppContent() {
  const { state, dispatch } = useDataContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      //const token = await AsyncStorage.getItem('jwtToken');
      const token2 = state.token;
      if (token2) {
        setIsAuthenticated(true);
      }
      else {
        setIsAuthenticated(false)
      }
    };

    checkAuth();
  }, [state.token]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Inside" component={InsideMainApp} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}



export default function App() {

  return (
    <SafeAreaProvider>
      <DataProvider>
        <NavigationContainer>

          <MainAppContent />

        </NavigationContainer>
      </DataProvider>
    </SafeAreaProvider>
  );
}