import { View, StyleSheet, Alert } from 'react-native';
import CustomTextField from '../../components/common/CustomTextField';
import AuthHead from './AuthHead';
import CustomButton from '../../components/common/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../constants/images';
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import { doc, serverTimestamp, setDoc } from '@react-native-firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../../../firebaseConfig';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/AuthSlice';
import CustomAlert from '../../components/common/CustomAlert';
import { useSignUp } from '../../hooks/useSignUp';

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const { signUp, loading } = useSignUp(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <CustomAlert
        title="Signing Up"
        message="wait a second"
        visible={loading}
        isLoading={loading}
      />
      <View style={styles.iconWrapper}>
        <Icons.authBack width="100%" height={300} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <AuthHead
            title="Register"
            description="Please sign up to get started"
          />
        </View>

        <View style={styles.card}>
          <CustomTextField
            value={name}
            onChangeText={setName}
            name="Name"
            placeholder="Enter your name"
          />
          <CustomTextField
            value={email}
            onChangeText={setEmail}
            name="Email"
            placeholder="Enter your email"
          />
          <CustomTextField
            value={password}
            onChangeText={setPassword}
            name="Password"
            placeholder="Enter your password"
            isPassword
          />
          <CustomTextField
            value={rePassword}
            onChangeText={setRePassword}
            name="Re-Type Password"
            placeholder="Re-Type Password"
            isPassword
          />
          <CustomButton
            title="Sign Up"
            onPress={() => {
              signUp(name, email, password, rePassword);
            }}
          />
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

export default RegisterScreen;
