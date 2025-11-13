


import { View, StyleSheet } from 'react-native';
import CustomTextField from '../../components/common/CustomTextField';
import AuthHead from './AuthHead';
import CustomButton from '../../components/common/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../constants/images';
import OTPInput from './OTPInput';

const VerificationScreen = () => {
  const verifyPress = () => {
    // send code
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icons.authBack width="100%" height={300} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <AuthHead
            title="Verification"
            description="We have sent a code to your email"
          />
        </View>

        <View style={styles.card}>
          <OTPInput/>
          <CustomButton title="Verify" onPress={verifyPress} />
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
    padding: 20,
    alignItems: 'center',
    gap: 30,
  },
});

export default VerificationScreen;
