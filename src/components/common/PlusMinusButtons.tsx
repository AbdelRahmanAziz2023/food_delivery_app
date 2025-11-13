import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import CustomText from './CustomText';
import { Icons } from '../../constants/images';

interface Props {
  value: number;
  onChange: (val: number) => void;
}

const PlusMinusButtons = ({ value, onChange }: Props) => {
  const handleMinus = () => {
    if (value > 1) onChange(value - 1);
  };

  const handlePlus = () => {
    onChange(value + 1);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleMinus} style={styles.button}>
        <Icons.minus />
      </Pressable>
      <CustomText text={value.toString()} textStyle={styles.text} />
      <Pressable onPress={handlePlus} style={styles.button}>
        <Icons.plus />
      </Pressable>
    </View>
  );
};

export default PlusMinusButtons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181C2E',
    height: 50,
    width: 125,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#32343E',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
