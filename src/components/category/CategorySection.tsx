import { View, StyleSheet } from 'react-native';
import SectionTitle from '../../screens/Home/SectionTitle';
import { CategoryList } from './CategoryList';

const CategorySection = () => {
  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <SectionTitle title="All Category" onPress={handlePress} />
      <CategoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    gap: 10,
  },
});

export default CategorySection;
