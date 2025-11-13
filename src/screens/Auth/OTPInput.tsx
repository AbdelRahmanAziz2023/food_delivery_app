import React, { useRef, useState } from 'react';
import { View, StyleSheet, TextInput, TextInput as RNTextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

const OTPInput: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputs = useRef<RNTextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input automatically
    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    const { key } = e.nativeEvent;

    // Move to previous input on Backspace
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          style={styles.input}
          ref={(ref) => {
            if (ref) inputs.current[index] = ref;
          }}
          cursorColor={'#FF7622'}
          value={value}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="number-pad"
          maxLength={1}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    backgroundColor:'#F0F5FA',
    color:'#32343E',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default OTPInput;
