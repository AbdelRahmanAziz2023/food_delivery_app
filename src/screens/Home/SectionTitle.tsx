import { Pressable, StyleSheet, View } from 'react-native';
import { Icons } from '../../constants/images';
import CustomText from '../../components/common/CustomText';

type Props = {
  title: string;
  onPress?: () => void;
};

const ArrowIcon = Icons.arrow;

const SectionTitle = ({ title, onPress }: Props) => {
  return (
    <View style={styles.conatiner}>
      <CustomText text={title} textStyle={styles.title} />
      <Pressable onPress={onPress}>
        <View style={styles.seeAll}>
          <CustomText text="See All" textStyle={styles.title} />
          <ArrowIcon width={15} height={15} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 20,
  },
});

export default SectionTitle;