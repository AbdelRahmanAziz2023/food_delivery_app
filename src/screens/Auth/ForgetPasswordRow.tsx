import { View, Text, StyleSheet, Pressable } from 'react-native';
import CustomText from '../../components/common/CustomText';
import { useState } from 'react';




const ForgetPasswordRow = ({navigation}:any) => {

    const [isChecked, setIsChecked] = useState(false);

    const forgetPasswordPress=()=>{
        navigation.navigate('ForgotPassword')
    }

  return (
    <View style={styles.container}>
        <View style={styles.rememberContainer}>
            {/* <CheckBox
            disabled={false}
            value={isChecked}
            onValueChange={(newValue)=>setIsChecked(newValue)}
            
            /> */}
            <CustomText text='Remember Me' textStyle={styles.text}/>
        </View>
        <Pressable onPress={forgetPasswordPress} >
          <CustomText text="Forget Password" textStyle={styles.forgetText}/>
        </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding:10,
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection:'row'
  },
  rememberContainer:{
    flexDirection:'row',
    gap:20,
    alignItems:"center"
  },
  text: {
    color: '#7E8A97',
    fontSize:14,
  },
  forgetText:{
    color:'#FF7622',
    fontSize:14,
  }
});

export default ForgetPasswordRow;
