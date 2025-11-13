import { View, StyleSheet } from "react-native"
import CustomText from "../../components/common/CustomText";
import { SvgProps } from "react-native-svg";


type Props={
   item:{id:string,Image?:React.FC<SvgProps>,title:string,description:string}
}


const OnboardingItem=({item}:Props)=>{
    return(<View style={styles.container}>
        {item.Image && <item.Image/>}
        <CustomText text={item.title} textStyle={styles.title}/>
        <CustomText text={item.description} textStyle={styles.description}/>
    </View>)
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    title:{
        fontSize:24,
        fontFamily:'Sen-ExtraBold',
    },
    description:{
        color:'#646982',
        textAlign:'center',
        lineHeight:24
    },
})


export default OnboardingItem;