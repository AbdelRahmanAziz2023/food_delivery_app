import { StyleSheet, ScrollView, View } from 'react-native';
import CustomSearchBar from '../../components/common/CustomSearchBar';
import CategorySection from '../../components/category/CategorySection';
import RestaurantSection from '../../components/restaurant/RestaurantSection';
import CustomText from '../../components/common/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../constants/images';
import IconButton from '../../components/common/IconButton';
import PlusMinusButtons from '../../components/common/PlusMinusButtons';
import HomeHeader from './HomeHeader';

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <HomeHeader/>
       
        <CustomText text="Hello, Good Morning" textStyle={styles.greeting} />

        <CustomSearchBar onFocusSearch={()=>{navigation.navigate('Search')}} />

        <CategorySection />

        <RestaurantSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  content: {
    padding: 20,
    paddingBottom: 40,
  },

  greeting: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
