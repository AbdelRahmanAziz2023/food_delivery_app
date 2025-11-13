import { useState, useEffect } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RestaurantHeader from './RestaurantHeader';
import CategoryList from './CategoryList';
import MenuList from './MenuList';
import { useRestaurant } from '../../hooks/useRestaurant';
import IconButton from '../../components/common/IconButton';
import { Icons } from '../../constants/images';
import RestaurantScreenSkeleton from '../../components/skeleton/ResaurantScreenSkeleton';

type RestaurantRouteParams = {
  RestaurantScreen: { id: string };
};

const RestaurantScreen = ({ navigation }: any) => {
  const { id } =
    useRoute<RouteProp<RestaurantRouteParams, 'RestaurantScreen'>>().params;
  const { restaurant, menuItems, loading, error } = useRestaurant(id);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState(menuItems);

  useEffect(() => {
    if (restaurant) {
      setSelectedCategory(restaurant.category[0]);
    }
  }, [restaurant]);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredItems(menuItems.filter(i => i.category === selectedCategory));
    }
  }, [selectedCategory, menuItems]);

  if (loading) {
  return <RestaurantScreenSkeleton />;
}

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!restaurant) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconButton Icon={Icons.back} onPress={() => navigation.goBack()} style={{marginBottom:20}} />
        <RestaurantHeader restaurant={restaurant} />
        <CategoryList
          categories={restaurant.category}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <MenuList items={filteredItems} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: 'red', fontSize: 16 },
});

export default RestaurantScreen;
