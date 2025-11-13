import { Alert } from 'react-native';

export const validateEmail = (email: string): boolean => {
  const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reEmail.test(email.trim().toLowerCase());
};

export const validatePassword = (password: string): boolean => {
  const rePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return rePassword.test(password);
};

export const validateLogInInput = (
  email: string,
  password: string,
): boolean => {
  return validateEmail(email) && validatePassword(password);
};

export const validateRePassword = (
  password: string,
  rePassword: string,
): boolean => {
  if (password !== rePassword) {
    Alert.alert('Password Mismatch', 'Passwords do not match.');
    return false;
  }
  return true;
};

export const validateSignUpInput = (
  email: string,
  password: string,
  rePassword: string,
): boolean => {
  return (
    validateEmail(email) &&
    validatePassword(password) &&
    validateRePassword(password, rePassword)
  );
};
