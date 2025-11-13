import { View, StyleSheet } from 'react-native';
import CustomText from '../../components/common/CustomText';

type Props = {
  title: string;
  description: string;
};

const AuthHead = ({ title, description }: Props) => {
  return (
    <View style={styles.container}>
      <CustomText text={title} textStyle={styles.title} />
      <CustomText text={description} textStyle={styles.description} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Sen-Bold',
    color: '#fff',
  },
  description: {
    color: '#FFF2E0',
  },
});

export default AuthHead;
