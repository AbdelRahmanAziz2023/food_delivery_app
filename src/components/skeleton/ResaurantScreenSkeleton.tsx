import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RestaurantItemSkeleton from './RestaurantItemSkeleton';
import CategoryItemSkeleton from './CategoryItemSkeleton';
import ProductItemSkeleton from './ProductItemSkeleton';

const RestaurantScreenSkeleton = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header skeleton */}
        <RestaurantItemSkeleton />

        {/* Categories skeleton */}
        <View style={styles.categoriesContainer}>
          {[...Array(5)].map((_, i) => (
            <CategoryItemSkeleton key={i} />
          ))}
        </View>

        {/* Menu items skeleton */}
        <View style={styles.menuContainer}>
          {[...Array(5)].map((_, i) => (
            <ProductItemSkeleton key={i} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  categoriesContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 15,
  },
  menuContainer: {
    gap: 10,
    marginTop: 10,
  },
});

export default RestaurantScreenSkeleton;
