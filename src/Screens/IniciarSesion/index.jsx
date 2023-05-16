import { Text, View } from "react-native";

import Boton from "../../components/Buttons";
import Card from "../../components/Card";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground } from "react-native";
import Input from "../../components/Input";
import { Keyboard } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

const IniciarSesion = ({navigation}) => {

    const image= require('../../assets/image/login.jpg')

    
    return (
    <ImageBackground source={image} style={styles.ImageBackground} >
    
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior="height">
                <Card otherStyles={styles.CardLogin}>

                    <View style={styles.containerInputIcon}>
                        <Icon name="user" size={30} color={'#fff'} style={styles.Icon}/>
                        <Input placeholder='Email' autoComplete='email' newStyle={styles.Input}  />                   
                    </View>

                    <View style={styles.containerInputIcon}>
                        <Icon name="lock" size={30} color={'#fff'} style={styles.Icon}/>
                        <Input placeholder='Password' autoComplete='password' secureTextEntry={true} newStyle={styles.Input} />                                         
                    </View>
                    <Boton newStyles={styles.BotonLogin} onPress={()=>navigation.navigate('Home')}>INICIAR SESION</Boton>
                </Card>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    
    </ImageBackground>
    );
};

export default IniciarSesion;
