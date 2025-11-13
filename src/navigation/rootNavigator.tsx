import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './authNavigator';
import AppNavigator from './appNavigator';
import SplashScreen from '../screens/Splash/SplashScreen';
import OnboaringScreen from '../screens/Onboarding/OnboardingScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboaringScreen} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
