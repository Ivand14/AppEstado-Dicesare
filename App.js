import BottomTabNavigator from './src/navigation/BottomTabNavigator.jsx'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { StyleSheet } from 'react-native'
import store from './src/store'
import { useFonts } from 'expo-font'

const App = () => {


    const [fonstLoaded]=useFonts({
        Primario:require('./src/assets/fonts/Primario/SignikaNegative-VariableFont_wght.ttf'),
        Secundario:require('./src/assets/fonts/Secundario/Ysabeau-VariableFont_wght.ttf')
    })

    if(!fonstLoaded){
        return null;
    }


    
    return (
        <Provider store={store}>
            <NavigationContainer>
                <BottomTabNavigator/>
            </NavigationContainer>      
        </Provider>
    )
}

export default App


