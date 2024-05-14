import { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BackHandler, Alert } from 'react-native';

// Screens
import Citas from '../componenets/Screens/Citas';
import Calendario from '../componenets/Screens/Calendario';
import PruebaScreen from '../componenets/Screens/Pruebas';
import SettingsScreen from '../componenets/Screens/Setting';
import NotififcationsScreen from '../componenets/Screens/Notifications';
import { useDataContext } from '../componenets/Context/GlobalStateContext';

//Screen names
const datesName = "Citas";
const calendarName = "Calendario";
const pruebaName = 'Prueba';
const notificationsName = 'Notificaciones';
const settingsName = 'Ajustes';

const Tab = createBottomTabNavigator();

function MainContainer({ navigation }) {

  const {state, dispatch} = useDataContext()

  useEffect(() => {
    const backHandler = navigation.addListener('beforeRemove', (e) => {
      if (!navigation.canGoBack()) {
        // If the user cannot go back, exit the app
        BackHandler.exitApp();
        return;
      }
      else {
        // If the user can go back, go back to the previous screen
        BackHandler.exitApp();
      }
    });

    
  }, [navigation]);

  return (

    <Tab.Navigator
      initialRouteName={datesName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === datesName) {
            iconName = focused ? 'book' : 'book-outline';

          } else if (rn === calendarName) {
            iconName = focused ? 'calendar-number' : 'calendar-number-outline';

          }
          else if (rn === notificationsName) {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';

          }
          else if (rn === pruebaName) {
            iconName = focused ? 'apps' : 'apps-outline';

          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },

      })}
      tabBarOptions={{
        activeTintColor: '#0165FC',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 }
      }}>

      <Tab.Screen name={datesName} component={Citas} options={{tabBarBadge: state.citasPendientes.length !== 0 ? state.citasPendientes.length : null}}/>
      <Tab.Screen name={calendarName} component={Calendario} />
      <Tab.Screen name={notificationsName} component={NotififcationsScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
      <Tab.Screen name={pruebaName} component={PruebaScreen} />

    </Tab.Navigator>
  );
}

export default MainContainer;