import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/AuthSlice';

export const useSignInWithGoogle = (navigation: any) => {
  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        const { idToken, user } = response.data;
        dispatch(addUser(user));
        console.log('User logged in : ' + user);
        navigation.replace('App');
      } else {
        console.log('error', response);
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            console.log('user cancelled the login flow');
            break;
          case statusCodes.IN_PROGRESS:
            console.log('operation (e.g. sign in) is in progress already');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('play services not available or outdated');
            break;
          default:
            console.log('some other error', error.code);
        }
      }
    }
  };
  return { signInWithGoogle };
};
