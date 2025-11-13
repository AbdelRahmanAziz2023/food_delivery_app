import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LocationAccess from '../screens/LocationAccess/LocationAccess';
import { hasAccessLocation } from '../services/Storage/LocationAccessStorage';
import RestaurantScreen from '../screens/Restaurant/RestaurantScreen';
import ProductScreen from '../screens/Product/ProductScreen';
import CartScreen from '../screens/Cart/CartScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { View, ActivityIndicator } from 'react-native';
import OrderSuccessScreen from '../screens/OrderSuccessScreen/OrderSuccessScreen';
import OrdersScreen from '../screens/OrdersScreen/OrdersScreen';
import SearchScreen from '../screens/Search/SearchScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkAccess = async () => {
      const hasAccess = await hasAccessLocation();
      setInitialRoute(hasAccess ? 'Home' : 'LocationAccess');
    };
    checkAccess();
  }, []);

  if (!initialRoute) {
    // Show loader while waiting for async storage
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name="LocationAccess" component={LocationAccess} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
