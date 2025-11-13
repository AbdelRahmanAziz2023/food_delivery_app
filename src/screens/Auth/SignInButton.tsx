import { View ,StyleSheet, Pressable } from "react-native";
import CustomText from "../../components/common/CustomText";


const SignInButton=({navigation}:any)=>{
    const signUpPress=()=>{
        navigation.navigate('Register')
    }
return(
    <View style={styles.container}>
        <CustomText text="Don’t have an account?" textStyle={styles.first}/>
        <Pressable onPress={signUpPress}>
             <CustomText text="Sign Up" textStyle={styles.second}/>
        </Pressable>
       
    </View>
)
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        justifyContent:'center'
    },
    first:{
        color:'#646982'
    },
    second:{
        color:'#FF7622',
        fontFamily:'Sen-Bold'
    }
})

export default SignInButton;