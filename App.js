
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './componenets/Screens/Login';
import MainContainer from './navigation/MainContainer';
import { DataProvider, useDataContext } from './componenets/Context/GlobalStateContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PaymentFailed from './componenets/Screens/PaymentFailed';
import PaypalPayment from './componenets/Modals/PaypalPayment';



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
  const [hasPaid, setHasPaid] = useState(false);
  const [paypalLink, setPaypalLink] = useState('');

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

  useEffect(() => {
    const checkPayment = async () => {
      //const token = await AsyncStorage.getItem('jwtToken');
      const paymentStatus = state.userData.PaymentStatus;
      console.log('El estado de pago es')
      console.log(paymentStatus)

      if (paymentStatus== 'True') {
        
        setHasPaid(true);
      }
      if(paymentStatus== 'False') {
        setPaypalLink(state.userData.PaypalPaymentUrl)
        setHasPaid(false)
      }
    };

    checkPayment();
  }, [state.userData]);

  

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        hasPaid ? (
          <Stack.Screen name="Inside" component={InsideMainApp} />
        ) : (
          <Stack.Screen name="Payment" component={PaypalPayment}  initialParams={{ link: `${state.userData.PaypalPaymentUrl}` }} />
        )
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