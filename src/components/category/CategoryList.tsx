import { FlatList, View, Text, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';
import { useCategories } from '../../hooks/useCategories';
import CategoryItemSkeleton from '../skeleton/CategoryItemSkeleton';
import CustomError from '../common/CustomError';

export const CategoryList = () => {
  const { categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <View style={styles.skeletonContainer}>
        <FlatList
          data={[...Array(6)]}
          horizontal
          keyExtractor={(_, i) => i.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={() => <CategoryItemSkeleton />}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        />
      </View>
    );
  }

  if (error) {
    return <CustomError title="Error" message="Failed to fetch categories" />;
  }

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <CategoryItem title={item.name} image={item.image} />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    paddingVertical: 6,
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#E74C3C',
    fontSize: 16,
  },
});
