import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AuthHead from './AuthHead';
import CustomTextField from '../../components/common/CustomTextField';
import ForgetPasswordRow from './ForgetPasswordRow';
import { Icons } from '../../constants/images';
import SignInButton from './SignInButton';
import CustomButton from '../../components/common/CustomButton';
import CustomText from '../../components/common/CustomText';
import SocialButton from './SocialButton';
import CustomAlert from '../../components/common/CustomAlert';
import { useSignInWithGoogle } from '../../hooks/useSignInWithGoogle';
import { useLogIn } from '../../hooks/useLogIn';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { logIn, loading, popup, closePopup } = useLogIn(navigation);

  const { signInWithGoogle } = useSignInWithGoogle(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <CustomAlert
        title="Signing In"
        message="wait a second"
        visible={loading}
        isLoading={loading}
      />
      <CustomAlert
        title="Error"
        message={popup.message}
        visible={popup.show}
        onClose={closePopup}
      />

      <View style={styles.iconWrapper}>
        <Icons.authBack width="100%" height={300} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <AuthHead
            title="Login"
            description="Please sign in to your existing account"
          />
        </View>

        <View style={styles.card}>
          <CustomTextField
            onChangeText={setEmail}
            value={email}
            name="Email"
            placeholder="Enter your email"
          />
          <CustomTextField
            onChangeText={setPassword}
            value={password}
            name="Password"
            placeholder="Enter your password"
            isPassword
          />
          <ForgetPasswordRow navigation={navigation} />
          <CustomButton
            title="Log In"
            onPress={() => {
              logIn(email, password);
            }}
          />
          <SignInButton navigation={navigation} />
          <CustomText text="Or" textStyle={styles.text} />
          <View style={styles.socialRow}>
            <SocialButton
              Icon={Icons.facbook}
              style={{ backgroundColor: '#395998' }}
            />
            <SocialButton
              Icon={Icons.twitter}
              style={{ backgroundColor: '#169CE8' }}
            />
            <SocialButton
              Icon={Icons.google}
              style={{ backgroundColor: '#1B1F2F' }}
              onPress={signInWithGoogle}
            />
          </View>
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
  text: {
    color: '#646982',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
