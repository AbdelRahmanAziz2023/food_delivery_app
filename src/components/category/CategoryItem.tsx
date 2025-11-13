import { View, StyleSheet, Image, Platform } from 'react-native';
import CustomText from '../common/CustomText';

type Props = {
  title?: string;
  image?: string;
  isSelected?: boolean;
};

const CategoryItem = ({ title, image, isSelected }: Props) => {
  return (
    <View
      style={[
        styles.container,
        isSelected && styles.selectedContainer, // optional highlight on select
      ]}
    >
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>

      {title && <CustomText text={title} textStyle={styles.title} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    marginVertical: 6,
    marginHorizontal: 8,
    gap: 12,

    // ✅ iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    // ✅ Android shadow
    elevation: 4,
  },

  selectedContainer: {
    backgroundColor: '#FFF3E0',
    shadowColor: '#EEA682',
    elevation: 4,
  },

  imageContainer: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#EEA682',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },

  title: {
    flexShrink: 1,
    fontFamily: 'Sen-Bold',
  },
});

export default CategoryItem;
