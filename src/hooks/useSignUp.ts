import { doc, serverTimestamp, setDoc } from '@react-native-firebase/firestore';
import { addUser } from '../store/slices/AuthSlice';
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { validateSignUpInput } from '../utils/validation';

export const useSignUp = (navigation: any) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signUp = async (
    name: string,
    email: string,
    password: string,
    rePassword: string,
  ) => {
    if (!validateSignUpInput(email, password, rePassword)) {
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      const userRef = doc(db, 'users', user.uid);
      dispatch(addUser(user.uid));
      console.log('User created:', user.uid);
      navigation.replace('App');
      await setDoc(userRef, {
        name,
        email,
        createdAt: serverTimestamp(),
      });

      console.log('User created & saved in Firestore:', user.uid);
    } catch (error) {
      console.log('Signup error:' + error);
    }
  };
  return {
    signUp,
    loading,
  };
};
