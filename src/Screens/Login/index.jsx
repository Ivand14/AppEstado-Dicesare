import * as Animatable from 'react-native-animatable';

import { Text, View } from 'react-native'

import Boton from '../../components/Buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Video } from 'expo-av'
import styles from './styles';

const Login = ({navigation}) => {


        const imgUrl= require('../../assets/pngegg.png')

        const videoUrl= require('../../assets/Studio_Project.mp4')

        
    return (
        <View style={styles.container}>
            <Video
            source={videoUrl}
            style={styles.video}
            resizeMode='cover'
            shouldPlay={true}
            isLooping={true}
            isMuted={true}
            /> 

            <View style={styles.containerTextVideo}>
                <Animatable.Image  animation="slideInDown" iterationCount={5} direction="alternate" source={imgUrl} style={styles.logo} />

        
                <Text style={styles.textVideo}>Crossfit Warrior</Text>

                
                
                <Text style={styles.subTextVideo}>Planea tu entrenamiento al instante en la App</Text> 

                <View style={styles.buttonsGroup}>
                    <Icon.Button name="google" backgroundColor="#F7FD04" color="black" Style={styles.ButtonGoogle} >
                        INICIAR SESION CON GOOGLE
                    </Icon.Button>      
                    <View>
                        <Boton newStyles={styles.ButtonLogin} onPress={() => navigation.navigate('IniciarSesion')}>
                            INICIAR SESION
                        </Boton>
                    </View>

                    <Text style={styles.TextRegistrate}>
                        NO TENES CUENTA? <Text style={styles.txtButton} onPress={() => navigation.navigate('Registrarse')}>REGISTRATE</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login

