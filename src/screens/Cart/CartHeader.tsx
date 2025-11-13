import { TouchableOpacity, View, StyleSheet } from "react-native"
import IconButton from "../../components/common/IconButton"
import CustomText from "../../components/common/CustomText"
import { Icons } from "../../constants/images"
import { useNavigation } from "@react-navigation/native"

type Props = {
    editMode: boolean,
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const CartHeader = ({editMode, setEditMode}:Props) => {
    const navigation = useNavigation();
    return(
         <View style={styles.header}>
        <View style={styles.headerLeft}>
          <IconButton Icon={Icons.back} onPress={() => navigation.goBack()} />
          <CustomText text="Cart" textStyle={styles.headerTitle} />
        </View>
        <TouchableOpacity onPress={() => setEditMode(!editMode)}>
          <CustomText
            text={editMode ? 'Done' : 'Edit'}
            textStyle={styles.editText}
          />
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom:20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
  editText: {
    color: '#FF7A00',
    fontSize: 16,
  },
})

export default CartHeader;