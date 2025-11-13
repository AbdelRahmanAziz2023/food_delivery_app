import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import firestore from "@react-native-firebase/firestore";

export const useUser = () => {
  const userId = useSelector((state: RootState) => state.auth);
  const [user, setUser] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    if (!userId) {
      setUser(null);
      setLoadingUser(false);
      return;
    }

    const getUser = async () => {
      try {
        const userDoc = await firestore().collection('users').doc(userId).get();
        if (await userDoc.exists) setUser(userDoc.data());
        else setUser(null);
      } catch (err) {
        console.error(err);
        setUser(null);
      } finally {
        setLoadingUser(false);
      }
    };

    getUser();
  }, [userId]);

  return { user, loadingUser };
};
