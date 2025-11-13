import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toast, { BaseToast, ToastConfig } from 'react-native-toast-message';

export const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ ...styles.toastContainer, borderLeftColor: '#4BB543' }}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      style={{ ...styles.toastContainer, borderLeftColor: '#FF4C4C' }}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  info: (props) => (
    <BaseToast
      {...props}
      style={{ ...styles.toastContainer, borderLeftColor: '#2D9CDB' }}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    borderLeftWidth: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  text2: {
    fontSize: 14,
    color: '#fff',
  },
});
