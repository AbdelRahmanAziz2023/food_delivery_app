import { useState } from "react";
import {auth} from '../../firebaseConfig';
import { signOut } from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";

export const useLogout = (navigation: any) => {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: '' });

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setPopup({ show: true, message: 'Logged out successfully' })
      navigation.replace('Auth');
    } catch (error) {
      setPopup({ show: true, message: 'An error occurred while logging out.' });
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => setPopup({ show: false, message: '' });

  return {
    logout,
    loading,
    popup,
    closePopup,
  };
};
