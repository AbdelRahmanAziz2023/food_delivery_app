import { View, StyleSheet, FlatList, Animated, Pressable } from 'react-native';
import { onboardingData } from './data';
import OnboardingItem from './OnboardingItem';
import { useRef, useState } from 'react';
import Pagination from './Pagination';
import CustomButton from '../../components/common/CustomButton';
import CustomText from '../../components/common/CustomText';
import { saveOnboarding } from '../../services/Storage/OnboardingStorage';

const OnboaringScreen = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < onboardingData.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace('Auth');
    //   saveOnboarding();
    }
  };

  const skipPressed = () => {
    navigation.replace('Auth');
    // saveOnboarding();
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingData}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({ item }) => <OnboardingItem item={item} />}
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <Pagination data={onboardingData} scrollX={scrollX} />
      <CustomButton
        onPress={scrollTo}
        title={
          currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'
        }
      />

      {currentIndex !== onboardingData.length - 1 && (
        <Pressable onPress={skipPressed}>
          <CustomText text="Skip" textStyle={styles.skipTextStyle} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    padding: 50,
    gap: 10,
  },
  skipTextStyle: {
    color: '#646982',
  },
});

export default OnboaringScreen;
