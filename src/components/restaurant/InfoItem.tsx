import { View, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import CustomText from '../common/CustomText';

type Props = {
  Icon: React.FC<SvgProps>;
  text: string;
};

const InfoItem = ({ Icon, text }: Props) => {
  return (
    <View style={styles.container}>
      <Icon />
      <CustomText text={text} textStyle={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  text: {
    color: '#181C2E',
    fontSize: 14,
  },
});

export default InfoItem;
