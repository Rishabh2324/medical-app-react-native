import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from './cart';
import Login from './login';
import Dashboard from './dashboard';
import ComingSoon from './comingSoon';
import MedicinePage from './medicine';
import OrderMedicine from './orderMedicine';

import { useAuthContext } from '../context/authContext';
import { MedicineContextProvider } from '../context/medicineContext';
import OrderPlaced from './orderPlaced';

const Stack = createStackNavigator();

export default function Main() {
  const { userId, isSignout } = useAuthContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {userId == null ? (
          <Stack.Screen
            name="SignIn"
            component={Login}
            options={{
              animationTypeForReplace: isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <>
            <Stack.Screen name="Home" component={Dashboard} />
            <Stack.Screen name="MedicinePage" component={MedicinePage} />
            <Stack.Screen name="OrderMedicine" component={OrderMedicine} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ComingSoon" component={ComingSoon} />
            <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
