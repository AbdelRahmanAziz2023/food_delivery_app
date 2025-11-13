import {
  View,
  StyleSheet,
  TextInput,
  ViewStyle,
  Pressable,
} from 'react-native';
import CustomText from './CustomText';
import { useState } from 'react';
import { Icons } from '../../constants/images';

type Props = {
  name: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  containerStyle?: ViewStyle;
  isPassword?: boolean;
};

const CustomTextField = ({
  name,
  placeholder,
  containerStyle,
  isPassword = false,
  onChangeText,
  value,
}: Props) => {
  const [isSecure, setIsSecure] = useState(isPassword);

  const changeSecure = () => {
    setIsSecure(prev => !prev);
  };

  const Eye = Icons.eye;
  const EyeOff = Icons.eyeOff;

  const icon = isSecure ? (
    <Eye stroke={'#B4B9CA'} />
  ) : (
    <EyeOff stroke={'#B4B9CA'} />
  );

  return (
    <View style={styles.container}>
      <CustomText text={name} />
      <View style={styles.textFieldContainer}>
        <TextInput
          cursorColor={'#FF7622'}
          placeholder={placeholder}
          style={styles.textFieldStyle}
          secureTextEntry={isSecure}
          placeholderTextColor={'#A0A5BA'}
          onChangeText={onChangeText}
          value={value}
        />
        {isPassword && <Pressable onPress={changeSecure}>{icon}</Pressable>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
  },
  textStyle: {},
  textFieldContainer: {
    backgroundColor: '#F0F5FA',
    width: '100%',
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textFieldStyle: {
    color: '#32343E',
    width: '90%',
  },
});

export default CustomTextField;
