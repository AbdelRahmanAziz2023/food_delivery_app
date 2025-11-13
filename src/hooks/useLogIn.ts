import { signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/AuthSlice';
import { validateLogInInput } from '../utils/validation';

export const useLogIn = (navigation: any) => {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: '' });
  const dispatch = useDispatch();

  const showPopup = (message: string) => {
    setPopup({ show: true, message: message });
  };

  const closePopup = () => setPopup({ show: false, message: '' });
  const logIn = async (email: string, password: string) => {
    if (!validateLogInInput(email, password)) {
      showPopup('Invalid email or password format.');
      return;
    }
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log('User logged in : ' + userCredential.user.uid);
      dispatch(addUser(userCredential.user.uid));
      navigation.replace('App');
    } catch (error: any) {
      setLoading(false);
      if (error.code === 'auth/user-not-found') {
        showPopup('No user found with this email address.');
      } else if (error.code === 'auth/wrong-password') {
        showPopup('Incorrect password.');
      } else {
        showPopup('An error occurred while logging in.');
      }
      console.log('Login error:' + error);
    } finally {
      setLoading(false);
    }
  };
  return {
    logIn,
    loading,
    popup,
    closePopup,
  };
};
