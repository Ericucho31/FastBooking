
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './componenets/Screens/Login';
import MainContainer from './navigation/MainContainer';
import { DataProvider } from './componenets/Context/GlobalStateContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();

const MainApp = createNativeStackNavigator();

function InsideMainApp() {
  return (
    <MainApp.Navigator  screenOptions={{ headerShown: false }}>
      <MainApp.Screen  name="MainComponent" component={MainContainer}/>
    </MainApp.Navigator>
  )

}
export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user)
    });
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DataProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>

            {user ? (
              <Stack.Screen name="Inside" component={InsideMainApp}/>

            ) : (<Stack.Screen name="Login" component={Login} />)}


          </Stack.Navigator>
        </DataProvider>
      </NavigationContainer>
    </SafeAreaProvider>
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
