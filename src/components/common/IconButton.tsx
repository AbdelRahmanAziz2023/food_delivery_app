import { View, ViewStyle, StyleSheet, Pressable } from 'react-native';
import { Icons } from '../../constants/images';
import { SvgProps } from 'react-native-svg';
import CustomText from './CustomText';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = {
  Icon: React.FC<SvgProps>;
  onPress?: () => void;
  style?: ViewStyle;
  isCart?: boolean;
};

const IconButton = ({ Icon, onPress, style, isCart = false }: Props) => {
  const cartLength = useSelector((state: RootState) => state.cart.items.length);

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      {isCart && cartLength > 0 && (
        <View style={styles.notify}>
          <CustomText
            text={cartLength.toString()}
            textStyle={{ color: 'white', fontSize: 10 }}
          />
        </View>
      )}
      <Icon />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF0F4',
  },
  notify: {
    width: '30%',
    height: '30%',
    borderRadius: 50,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
