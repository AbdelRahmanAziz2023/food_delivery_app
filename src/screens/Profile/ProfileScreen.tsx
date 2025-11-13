import { View, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconButton from '../../components/common/IconButton';
import { Icons } from '../../constants/images';
import ProfileItem from './ProfileItem';
import CustomText from '../../components/common/CustomText';
import { useUser } from '../../hooks/useUser';
import { useLogout } from '../../hooks/useLogout';
import CustomAlert from '../../components/common/CustomAlert';


const ProfileScreen = ({ navigation }: any) => {
  const {user, loadingUser } = useUser();
  console.log('user',user);
  if(loadingUser) return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator color={'#FF7622'} size="large" /></View>;
  const { logout, popup, loading, closePopup } = useLogout(navigation);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CustomAlert
        visible={popup.show}
        onClose={closePopup}
        title="LogOut"
        message={popup.message}
        isLoading={loading}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerLeft}>
          <IconButton Icon={Icons.back} onPress={() => navigation.goBack()} />
          <CustomText text="Profile" textStyle={styles.headerTitle} />
        </View>
        <View style={styles.Info}>
          <View style={styles.avatar}>
            <Image />
          </View>
          <View style={styles.data}>
            <CustomText text={user.name}textStyle={styles.name} />
            <CustomText text={user.email} textStyle={styles.bio} />
          </View>
        </View>
        <View style={styles.content}>
          <ProfileItem Icon={Icons.user} titel="Personal Info" />
          <ProfileItem Icon={Icons.tag} titel="Addresses" />
        </View>
        <View style={styles.content}>
          <ProfileItem Icon={Icons.cart} titel="Cart" />
          <ProfileItem Icon={Icons.heart} titel="Favourite" />
          <ProfileItem Icon={Icons.bell} titel="Notification" />
          <ProfileItem Icon={Icons.star} titel="Orders" onPress={() => navigation.navigate('Orders')} />
        </View>
        <View style={styles.content}>
          <ProfileItem Icon={Icons.question} titel="FAQs" />
          <ProfileItem Icon={Icons.message} titel="User Reviews" />
          <ProfileItem Icon={Icons.smile} titel="Settings" />
        </View>
        <View style={styles.content}>
          <ProfileItem Icon={Icons.logout} titel="Logout" onPress={logout} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    gap: 20,
  },
  content: {
    width: '100%',
    backgroundColor: '#F6F8FA',
    padding: 10,
    alignItems: 'center',
    borderRadius: 16,
  },
  Info: {
    width: '100%',
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFBF6D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Sen-Bold',
    fontSize: 20,
  },
  data: {
    gap: 10,
  },
  bio: {
    color: '#A0A5BA',
    fontSize: 14,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    fontSize: 20,
  },
});

export default ProfileScreen;
