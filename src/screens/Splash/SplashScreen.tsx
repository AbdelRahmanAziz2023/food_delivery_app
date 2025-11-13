import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import Logo from '../../../assets/images/Logo.svg';
import { Icons } from '../../constants/images';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { hasSeenOnboarding } from '../../services/Storage/OnboardingStorage';

const SplashScreen = ({ navigation }: any) => {
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const user = useSelector((state: RootState) => state.auth);

  const EllipseGray = Icons.ellipseGray;
  const EllipseOrange = Icons.ellipseOrange;

  useEffect(() => {
    const startAnimation = () => {
      Animated.sequence([
        Animated.parallel([
          Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 3,
            tension: 100,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(500),
      ]).start(() => {
        // ⚡ navigation logic moved into timeout
        setTimeout(async () => {
          const onboarding = await hasSeenOnboarding();
          if (onboarding) {
            navigation.replace('Onboarding');
          } else {
            navigation.replace(user ? 'App' : 'Auth');
          }
        }, 100);
      });
    };

    startAnimation();
  }, [user, navigation, scaleAnim, fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.topLeft,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <EllipseGray width={200} height={200} />
      </Animated.View>

      <Animated.View
        style={[
          styles.bottomRight,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <EllipseOrange width={260} height={260} />
      </Animated.View>

      <Animated.View
        style={[
          styles.logoContainer,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Logo width={160} height={160} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: { zIndex: 10 },
  topLeft: { position: 'absolute', top: 0, left: 0 },
  bottomRight: { position: 'absolute', bottom: 0, right: 0 },
});

export default SplashScreen;
