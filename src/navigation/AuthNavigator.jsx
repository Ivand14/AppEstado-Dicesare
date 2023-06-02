import IniciarSesion from "../Screens/IniciarSesion";
import Login from "../Screens/Login";
import Registrarse from "../Screens/Registrarse";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator()

const Auth=()=>{
    return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='IniciarSesion' component={IniciarSesion} options={{headerShown:false}}/>
        <Stack.Screen name='Registrarse' component={Registrarse} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}

export default Auth