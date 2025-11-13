import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Product } from '../../types/Product.type';
import ProductItem from '../../components/product/ProductItem';

type Props = {
  items: Product[];
};

const MenuList = ({ items }: Props) => {
  if (items.length === 0) {
    return <Text style={styles.empty}>No items for this category.</Text>;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductItem item={item} />}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingBottom: 20,
  },
  empty: {
    textAlign: 'center',
    color: '#A0A5BA',
    fontSize: 14,
    marginTop: 30,
  },
});

export default MenuList;
