import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Citas from '../componenets/Screens/Citas';
import Calendario from '../componenets/Screens/Calendario';
import PruebaScreen from '../componenets/Screens/Pruebas';

//Screen names
const datesName = "Citas";
const calendarName = "Calendario";
const pruebaName = 'Prueba'

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    
      <Tab.Navigator
        initialRouteName={calendarName}
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === datesName) {
              iconName = focused ? 'book' : 'book-outline';

            } else if (rn === calendarName) {
              iconName = focused ? 'calendar-number' : 'calendar-number-outline';

            } 
            else if (rn === pruebaName) {
              iconName = focused ? 'apps' : 'apps-outline';

            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
        })}
        tabBarOptions={{
          activeTintColor:'#0165FC',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={datesName} component={Citas} />
        <Tab.Screen name={calendarName} component={Calendario} />
        <Tab.Screen name={pruebaName} component={PruebaScreen} />

      </Tab.Navigator>
    
  );
}

export default MainContainer;