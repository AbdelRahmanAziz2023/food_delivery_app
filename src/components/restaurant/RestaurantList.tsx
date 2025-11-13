import { FlatList, View, StyleSheet } from 'react-native';
import RestaurantItem from './RestaurantItem';
import RestaurantItemSkeleton from '../skeleton/RestaurantItemSkeleton';
import CustomError from '../common/CustomError';
import { useRestaurants } from '../../hooks/useRestaurants';

const RestaurantList = () => {
  const { restaurants, isLoading, error } = useRestaurants();

  // Show skeletons while loading
  if (isLoading) {
    return (
      <View style={styles.skeletonContainer}>
        {[...Array(5)].map((_, i) => (
          <RestaurantItemSkeleton key={i} />
        ))}
      </View>
    );
  }

  // Show error if fetching fails
  if (error) {
    return <CustomError title="Error" message="Failed to fetch restaurants" />;
  }

  // Show list after data loads
  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item.id?.toString() || ''}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 20,
    padding: 10,
    paddingBottom: 50,
  },
  skeletonContainer: {
    padding: 10,
    gap: 20,
  },
});

export default RestaurantList;
