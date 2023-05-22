import BottomTabNavigator from './src/navigation/BottomTabNavigator.jsx'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import Training from './src/navigation/Training.jsx'
import Wod from './src/navigation/Wod.jsx'
import { useFonts } from 'expo-font'

//npx expo install expo-font


const App = () => {


    const [fonstLoaded]=useFonts({
        Primario:require('./src/assets/fonts/Primario/SignikaNegative-VariableFont_wght.ttf'),
        Secundario:require('./src/assets/fonts/Secundario/Ysabeau-VariableFont_wght.ttf'),
    })

    if(!fonstLoaded){
        return null;
    }


    
    return (
        <NavigationContainer>
            <BottomTabNavigator/>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
