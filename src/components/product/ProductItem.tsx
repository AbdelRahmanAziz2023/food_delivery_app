import { Pressable, StyleSheet, View, Image } from 'react-native';
import { Product } from '../../types/Product.type';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../common/CustomText';

type Props = {
  item: Product;
};

const ProductItem = ({ item }: Props) => {
  const navigation = useNavigation<any>();

  const onPress = () => {
   navigation.navigate('Product', {
    restaurantId: item.restaurantId,
    productId: item.id,
  });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <CustomText text={item.name} textStyle={styles.title} />
        <CustomText text={item.description} textStyle={styles.description} />
        <CustomText text={`${item.price} EGP`} textStyle={styles.price} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: 110,
    height: 110,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#181C2E',
    fontFamily: 'Sen-Bold',
  },
  description: {
    fontSize: 14,
    color: '#A0A5BA',
    marginVertical: 4,
    fontFamily: 'Sen-Regular',
  },
  price: {
    fontSize: 14,
    color: '#EEA682',
    fontFamily: 'Sen-Bold',
  },
});

export default ProductItem;
