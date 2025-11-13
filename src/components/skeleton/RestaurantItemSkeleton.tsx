import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from 'react-native-skeletons';

const RestaurantItemSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={styles.image} />
      <Skeleton style={[styles.textSkeleton, { width: '70%' }]} />
      <Skeleton style={[styles.textSkeleton, { width: '50%' }]} />
      <View style={styles.bottom}>
        <Skeleton style={[styles.smallSkeleton, { width: 40 }]} />
        <Skeleton style={[styles.smallSkeleton, { width: 40 }]} />
        <Skeleton style={[styles.smallSkeleton, { width: 60 }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  textSkeleton: {
    height: 20,
    borderRadius: 4,
  },
  smallSkeleton: {
    height: 15,
    borderRadius: 4,
  },
  bottom: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default RestaurantItemSkeleton;
