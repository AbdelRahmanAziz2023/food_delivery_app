import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../../components/common/IconButton';
import { Icons } from '../../constants/images';

type Props = { onBack: () => void; onFavorite?: () => void };

const ProductHeader = ({ onBack, onFavorite }: Props) => (
  <View style={styles.header}>
    <IconButton Icon={Icons.back} onPress={onBack} />
    <IconButton Icon={Icons.heart} onPress={onFavorite} />
  </View>
);

export default ProductHeader;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
});
