import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_LOCATION_KEY = 'accessLocation';

export const saveAccessLocation = async () => {
  try {
    await AsyncStorage.setItem(ACCESS_LOCATION_KEY, 'true');
  } catch (e) {
    console.log('Error saving access location :' + e);
  }
};

export const hasAccessLocation = async () => {
  try {
    const value = await AsyncStorage.getItem(ACCESS_LOCATION_KEY);
    return value === 'true';
  } catch (e) {
    console.log('Error checking access location :' + e);
  }
};
