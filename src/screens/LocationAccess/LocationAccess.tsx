import { View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import { Images } from '../../constants/images';
import CustomText from '../../components/common/CustomText';
import { saveAccessLocation } from '../../services/Storage/LocationAccessStorage';

const LocationAccess = ({ navigation }: any) => {
  const accessLocation = async () => {
    //handle logic
    if (Platform.OS === 'ios') {
      return true;
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          saveAccessLocation();
          navigation.navigate('Home');
        }
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
  };

  const Map = Images.map;
  return (
    <View style={styles.container}>
      <Map width={300} height={300} />
      <CustomButton title="Access Location" onPress={accessLocation} />
      <CustomText
        text="FOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP"
        textStyle={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  text: {
    color: '#646982',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default LocationAccess;
