import { View,StyleSheet, Pressable, TouchableOpacity } from "react-native"
import { Icons } from "../../constants/images";
import { SvgProps } from "react-native-svg";
import IconButton from "../../components/common/IconButton";
import CustomText from "../../components/common/CustomText";


type Props = {
    Icon:React.FC<SvgProps>;
    titel:string;
    onPress?:()=>void
}


const ProfileItem = ({Icon,titel,onPress}:Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.content}>
                <IconButton Icon={Icon} style={styles.icon} />
                <CustomText text={titel} textStyle={styles.title} />
            </View>
            <Icons.arrow/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
    },
    content:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
    },
    title:{
        fontSize:18,
    },
    icon:{
        backgroundColor:'#fff',
    }
})

export default ProfileItem;