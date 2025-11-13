import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomSearchBar from '../../components/common/CustomSearchBar';
import RestaurantItem from '../../components/restaurant/RestaurantItem';
import ProductItem from '../../components/product/ProductItem';
import RestaurantItemSkeleton from '../../components/skeleton/RestaurantItemSkeleton';
import CustomText from '../../components/common/CustomText';
import { useSearch } from '../../hooks/useSearch';

type SectionItem = {
  type: 'restaurant' | 'product';
  data: any;
};

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const { restaurants, products, loading, searchAll } = useSearch();

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text.trim() !== '') searchAll(text);
  };

  // Combine data with type
  const restaurantItems: SectionItem[] = restaurants.map(r => ({
    type: 'restaurant',
    data: r,
  }));
  const productItems: SectionItem[] = products.map(p => ({
    type: 'product',
    data: p,
  }));

  const sections: { title: string; data: SectionItem[] }[] = [];
  if (restaurantItems.length > 0) sections.push({ title: 'Restaurants', data: restaurantItems });
  if (productItems.length > 0) sections.push({ title: 'Products', data: productItems });

  return (
    <SafeAreaView style={styles.container}>
      <CustomSearchBar handleSearchTerm={handleSearch} />

      {loading && (
        <View style={{ padding: 10 }}>
          {[...Array(5)].map((_, i) => (
            <RestaurantItemSkeleton key={i} />
          ))}
        </View>
      )}

      {!loading && query === '' && (
        <View style={styles.emptyContainer}>
          <CustomText
            text="Search for restaurants or products"
            textStyle={styles.emptyText}
          />
        </View>
      )}

      {!loading && query !== '' && sections.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No results found</Text>
        </View>
      )}

      {!loading && sections.length > 0 && (
        <FlatList
          data={sections.flatMap(section => [
            { type: 'header', title: section.title },
            ...section.data,
          ])}
          keyExtractor={(item, index) =>
            item.type === 'header' ? item.title + index : item.data.id
          }
          renderItem={({ item }) => {
            if (item.type === 'header') {
              return <Text style={styles.sectionHeader}>{item.title}</Text>;
            }
            return item.type === 'restaurant' ? (
              <RestaurantItem item={item.data} />
            ) : (
              <ProductItem item={item.data} />
            );
          }}
          contentContainerStyle={{ paddingVertical: 10, gap: 10 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: { fontSize: 16, color: '#A0A5BA' },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181C2E',
    marginVertical: 10,
  },
});

export default SearchScreen;
