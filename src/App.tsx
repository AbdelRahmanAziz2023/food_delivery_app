/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigation/rootNavigator';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { StripeProvider } from '@stripe/stripe-react-native';
import Toast from 'react-native-toast-message';
import { toastConfig } from './components/common/ToastConfig';




function App() {
  const [publishableKey, setPublishableKey] = useState(
    'pk_test_51SOySNP9i3OhzKND0Jit880GdX5BWHEhGIDOkVV8XDB47VrqZe79kyB9AmG4BxU81Fpj31jf5Y03nWXHb9G5rup0005681PH4w',
  );
  useEffect(() => {
    console.log('GoogleSignin.configure');
    GoogleSignin.configure({
      webClientId:
        '524068236635-f5rkt564lhtafl3h5eegvvitvnndpqqo.apps.googleusercontent.com',
      iosClientId:
        '524068236635-87d6ef2msb2b4abu9ojc14habdbsrdjb.apps.googleusercontent.com',
      profileImageSize: 150,
    });
  });
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={publishableKey}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
            <Toast config={toastConfig} />
          </NavigationContainer>
        </SafeAreaProvider>
      </StripeProvider>
    </Provider>
  );
}

export default App;
