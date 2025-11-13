import { Pressable , StyleSheet, ViewStyle } from "react-native"
import { SvgProps } from "react-native-svg"


type Props={
Icon:React.FC<SvgProps>;
onPress?:()=>void
style ?:ViewStyle;
}

const SocialButton =({Icon,onPress,style}:Props)=>{
    return(
         <Pressable onPress={onPress} style={[styles.iconCircle, style]}>
          <Icon style={styles.icon}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
    resizeMode: "contain",
  },
});

export default SocialButton;
