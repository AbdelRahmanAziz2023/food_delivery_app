import { View, StyleSheet, Animated, Dimensions } from 'react-native';

type Props = {
  data: any;
  scrollX: any;
};

const { width } = Dimensions.get('window');

const Pagination = ({ data, scrollX }: Props) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 20, 8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, { width: dotWidth, opacity }]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF7622',
    marginHorizontal: 4,
  },
});

export default Pagination;
