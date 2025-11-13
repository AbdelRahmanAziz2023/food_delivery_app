// components/restaurant/RestaurantHeader.tsx
import { View, Image, StyleSheet } from 'react-native';

import { Icons } from '../../constants/images';
import { Restaurant } from '../../types/Restaurant.type';
import CustomText from '../../components/common/CustomText';
import InfoItem from '../../components/restaurant/InfoItem';

const RestaurantHeader = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.coverImage }} style={styles.image} />
      <CustomText text={restaurant.name} textStyle={styles.title} />
      <CustomText text={restaurant.description} textStyle={styles.category} />

      <View style={styles.bottom}>
        <InfoItem Icon={Icons.star} text={restaurant.rating.toString()} />
        <InfoItem
          Icon={Icons.delivery}
          text={`${restaurant.deliveryFee} EGP`}
        />
        <InfoItem Icon={Icons.clock} text={`${restaurant.deliveryTime} min`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 10 },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { fontSize: 22, fontWeight: '600', color: '#181C2E' },
  category: { color: '#A0A5BA', fontSize: 14 },
  bottom: { flexDirection: 'row', gap: 20 },
});

export default RestaurantHeader;
