import { View, StyleSheet, Image, Pressable } from 'react-native';
import { Restaurant } from '../../types/Restaurant.type';
import CustomText from '../common/CustomText';
import InfoItem from './InfoItem';
import { Icons } from '../../constants/images';
import { useNavigation } from '@react-navigation/native';

type Props = {
  item: Restaurant;
};

const RestaurantItem = ({ item }: Props) => {

  const navigator = useNavigation<any>();
  
  const onPress =()=>{
    navigator.navigate('Restaurant', {id:item.id});
  }
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: item.coverImage }} style={styles.image} />
      <CustomText text={item.name} textStyle={styles.title} />
      <CustomText text={item.category.join('-')} textStyle={styles.category} />
      <View style={styles.bottom}>
        <InfoItem Icon={Icons.star} text={item.rating.toString()} />
        <InfoItem
          Icon={Icons.delivery}
          text={item.deliveryFee.toString() + '$'}
        />
        <InfoItem
          Icon={Icons.clock}
          text={item.deliveryTime.toString() + ' min'}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: '#181C2E',
    fontSize: 20,
  },
  category: {
    color: '#A0A5BA',
    fontSize: 14,
  },
  bottom: {
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export default RestaurantItem;
