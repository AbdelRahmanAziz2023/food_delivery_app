import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from 'react-native-skeletons';

const CategoryItemSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Skeleton style={styles.imageSkeleton} />
      </View>

      <Skeleton style={styles.titleSkeleton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    marginVertical: 6,
    marginHorizontal: 8,
    gap: 12,

    // ✅ iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    // ✅ Android shadow
    elevation: 4,
  },

  imageContainer: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  imageSkeleton: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },

  titleSkeleton: {
    height: 18,
    width: 80,
    borderRadius: 8,
  },
});

export default CategoryItemSkeleton;
