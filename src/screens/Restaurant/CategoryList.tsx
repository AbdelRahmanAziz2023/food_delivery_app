import { FlatList, Pressable, Text, StyleSheet } from 'react-native';
import CustomText from '../../components/common/CustomText';

type Props = {
  categories: string[];
  selectedCategory: string | null;
  onSelect: (category: string) => void;
};

const CategoryList = ({ categories, selectedCategory, onSelect }: Props) => {
  return (
    <FlatList
      data={categories}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item;
        return (
          <Pressable
            onPress={() => onSelect(item)}
            style={[styles.chip, isSelected && styles.chipSelected]}
          >
           <CustomText text={item} textStyle={isSelected ? styles.textSelected : styles.text} />
          </Pressable>
        );
      }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,

  },
  chipSelected: {
    backgroundColor: '#EEA682',
    
  },
  text: { color: '#181C2E', fontSize: 14 },
  textSelected: { color: '#fff',fontSize: 14 },
});

export default CategoryList;
