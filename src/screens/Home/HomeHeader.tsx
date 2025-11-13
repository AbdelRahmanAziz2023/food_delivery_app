import { View ,StyleSheet} from "react-native"
import IconButton from "../../components/common/IconButton"
import { Icons } from "../../constants/images"
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
    const navigation = useNavigation<any>();
    return(
         <View style={styles.header}>
          <IconButton
            Icon={Icons.menu}
            onPress={() => navigation.navigate('Profile')}
          />
          <IconButton
            Icon={Icons.cart}
            onPress={() => navigation.navigate('Cart')}
            style={styles.cart}
            isCart={true}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    cart: {
    backgroundColor: '#181C2E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  });

export default HomeHeader;