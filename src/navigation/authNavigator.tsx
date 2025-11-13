import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import ForgetPasswordScreen from "../screens/Auth/ForgetPasswordScreen";
import VerificationScreen from "../screens/Auth/VerificationScreen";



const Stack = createNativeStackNavigator();
const AuthNavigator = ()=>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
            <Stack.Screen name = 'Login' component={LoginScreen}/>
            <Stack.Screen name = 'Register' component={RegisterScreen}/>
            <Stack.Screen name = 'ForgotPassword' component={ForgetPasswordScreen}/>
            <Stack.Screen name = 'Verification' component={VerificationScreen}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator;