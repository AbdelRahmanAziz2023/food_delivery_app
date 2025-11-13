import { View, StyleSheet } from 'react-native';
import SectionTitle from '../../screens/Home/SectionTitle';
import RestaurantList from './RestaurantList';


const RestaurantSection = () => {
  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <SectionTitle title="Open Restaurants" onPress={handlePress} />
      <RestaurantList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    gap: 10,
  },
});

export default RestaurantSection;
