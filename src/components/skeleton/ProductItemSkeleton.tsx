import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from 'react-native-skeletons';

const ProductItemSkeleton = () => {
  return (
    <View style={styles.container}>
      {/* Left image placeholder */}
      <Skeleton style={styles.image} />

      {/* Right info placeholders */}
      <View style={styles.info}>
        <Skeleton style={[styles.textSkeleton, { width: '60%' }]} />
        <Skeleton style={[styles.textSkeleton, { width: '80%' }]} />
        <Skeleton style={[styles.textSkeleton, { width: '70%' }]} />
        <Skeleton style={[styles.priceSkeleton, { width: 60 }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    overflow: 'hidden',
    padding: 10,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'center',
    gap: 6,
  },
  textSkeleton: {
    height: 15,
    borderRadius: 4,
  },
  priceSkeleton: {
    height: 15,
    borderRadius: 4,
    marginTop: 6,
  },
});

export default ProductItemSkeleton;
