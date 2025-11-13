import { View, StyleSheet } from 'react-native';
import CustomTextField from '../../components/common/CustomTextField';
import AuthHead from './AuthHead';
import CustomButton from '../../components/common/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../constants/images';
import { useState } from 'react';
import { auth } from '../../../firebaseConfig';
import { sendPasswordResetEmail } from '@react-native-firebase/auth';
import CustomAlert from '../../components/common/CustomAlert';

const ForgetPasswordScreen = ({navigation}:any) => {

   const [email, setEmail] = useState('');
   const [isPopup,setIsPopup] = useState(false);
   const [message,setMessage] = useState('');

   const closePopup = () => {
    setIsPopup(false);
   // navigation.replace('Login');
   };
   
  const resetPassword = async () => {
  try {
    await sendPasswordResetEmail(auth, email);
    setIsPopup(true);
    setMessage('Password reset email sent.');
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      setIsPopup(true);
      setMessage('No user found with this email address.');
    } else if (error.code === 'auth/invalid-email') {
      setIsPopup(true);
      setMessage('Invalid email address format.');
    }
    else {
      setIsPopup(true);
      setMessage('An error occurred while sending the password reset email.');
    }
    console.log('Reset Password Error:', error);
  }
};
  return (
    <SafeAreaView style={styles.container}>
      <CustomAlert title='Reset Password' message={message} visible={isPopup} onClose={closePopup} />
      <View style={styles.iconWrapper}>
        <Icons.authBack width="100%" height={300} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <AuthHead
            title="Forgot Password"
            description="Please sign in to your existing account"
          />
        </View>

        <View style={styles.card}>
          <CustomTextField onChangeText={setEmail} value={email} name="Email" placeholder="Enter your email" />
          <CustomButton title="Send Code" onPress={resetPassword} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121223',
  },
  iconWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: -1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flex: 0.35,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    flex: 0.65,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    alignItems: 'center',
    gap: 20,
  },
});

export default ForgetPasswordScreen;
