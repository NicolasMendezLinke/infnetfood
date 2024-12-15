import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen'
import CheckoutScreen from './screens/CheckoutScreen';
import RestaurantDetailsScreen from './screens/RestaurantDetailsScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import OrdersScreen from './screens/OrdersScreen';
import { ThemeProvider } from './contexts/ThemeContext';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão para notificações não concedida');
      }
    };

    requestPermissions();

    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen}/>
          <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
          <Stack.Screen name="Orders" component={OrdersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}


