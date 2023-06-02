import { Alert, Text, View } from "react-native";

import Boton from "../../components/Buttons";
import Card from "../../components/Card";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground } from "react-native";
import InputForm from "../../components/Input";
import { Keyboard } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { signin } from "../../store/actions/auth.actions";
import styles from "./styles";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useReducer } from "react";

const FORM_INPUT_UPDATE='FORM_INPUT_UPDATE'

export const formReducer = (state, action) => {
        if (action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value,
        };
    
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        };
    
        let formIsValid = true;
    
        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }
    
        return {
            formIsValid,
            inputValues,
            inputValidities,
        };
        }
    
        return state;
    };

const IniciarSesion = ({navigation}) => {

    const dispatch=useDispatch()
    const [formState,formDispatch]=useReducer(formReducer,{
        inputValues:{
            email:'',
            password:'',
        },
    
        inputValidities:{
            email:false,
            password:false,
        },
    
        formIsValid:false,
        
        })


    const onHandleSignUp=()=>{
        console.log(formState)
        if (formState.formIsValid) {
        dispatch(signin(formState.inputValues.email, formState.inputValues.password));
        }else{
        Alert.alert(
            'FORMULARIO INVALIDO',
            'INGRESA UN CORREO VALIDO Y LA CONTRASEÑA DEBE TENER MAS DE 6 CARACTERES',
            [{Text:'OK'}]
        )
        }
    }

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        console.log(inputIdentifier, inputValue, inputValidity)
        formDispatch({
            type: FORM_INPUT_UPDATE,
            input: inputIdentifier,
            value: inputValue,
            isValid: inputValidity
            });
        }, [formDispatch]);







    

    const image= {uri:'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}

    
    return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        
        <LinearGradient colors={['#fff','#000000']} style={styles.Gradient} start={{ x: .1, y: .6 } }
        end={{ x: .7, y: .9 }} >
            <ImageBackground source={image} style={styles.ImageBackground} opacity={0.5} >
                <Text style={styles.Titulo}>BIENVENIDO A WARRIORS</Text>
                    <KeyboardAvoidingView behavior="height">
                        <Card otherStyles={styles.CardLogin}>

                            <View style={styles.containerInputIcon}>
                                <Icon name="user" size={30} color={'#fff'} style={styles.Icon}/>
                                <InputForm id='email' onInputChange={onInputChangeHandler} placeholder='Email' keyboardType='email-address' autoCapitalize='none' newStyle={styles.Input}  />                   
                            </View>

                            <View style={styles.containerInputIcon}>
                                <Icon name="lock" size={30} color={'#fff'} style={styles.Icon}/>
                                <InputForm id='password' onInputChange={onInputChangeHandler} placeholder='Password' secureTextEntry={true} newStyle={styles.Input} />                                         
                            </View>
                            <Boton newStyles={styles.BotonLogin} onPress={onHandleSignUp} >INICIAR SESION</Boton>
                        </Card>
                    </KeyboardAvoidingView>
            
            </ImageBackground>
        </LinearGradient>
        
        
    </TouchableWithoutFeedback>
    );
};

export default IniciarSesion;
