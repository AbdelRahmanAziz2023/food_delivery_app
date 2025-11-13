import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Icons } from '../../constants/images';

type Props = {
  handleSearchTerm?: (text: string) => void;
  onFocusSearch?: () => void;
  onClearSearch?: () => void;
};

const CustomSearchBar = ({
  handleSearchTerm,
  onFocusSearch,
  onClearSearch,
}: Props) => {
  const [value, setValue] = useState('');
  const handleSearch = (text: string) => {
    setValue(text);
    handleSearchTerm!(text);

    if (text === '') {
      onClearSearch?.();
    } else {
      onFocusSearch?.();
    }
  };

  return (
    <View style={styles.container}>
      <Icons.search />
      <TextInput
        placeholder="Search dishes, restaurants"
        onFocus={onFocusSearch}
        value={value}
        onBlur={() => {
          if (value === '') onClearSearch?.();
        }}
        style={styles.textField}
        onChangeText={handleSearch}
        placeholderTextColor="#868889"
      />
      {value !== '' && (
        <Pressable
          onPress={() => {
            setValue('');
            handleSearchTerm!('');
            onClearSearch?.();
          }}
        >
          {/* <Ionicons name="close-circle" size={18} color="#888" /> */}
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 60,
    borderRadius: 5,
    gap: 10,
  },
  textField: {
    flex: 1,

    marginHorizontal: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    color: '#676767',
  },
});

export default CustomSearchBar;
