import { Alert, ImageBackground, Keyboard, KeyboardAvoidingView, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useCallback, useReducer } from 'react'

import Boton from '../../components/Buttons'
import Card from '../../components/Card'
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../../components/Input'
import {LinearGradient} from 'expo-linear-gradient'
import { signup } from '../../store/actions/auth.actions';
import styles from './styles'
import { useDispatch } from 'react-redux';

const FORM_INPUT_UPDATE='FORM_INPUT_UPDATE'


export const formReducer=(state,action)=>{
  if(action.type===FORM_INPUT_UPDATE){

    const inputValues={
      ...state.inputValues,
      [action.input]:action.value,
    }

    const inputValidities={
      ...state.inputValidities,
      [action.input]:action.isValid,
    }

    let formIsValid=true;
    
    for(const key in inputValidities){
      formIsValid = formIsValid && inputValidities[key]
    }

    return{
      formIsValid,
      inputValues,
      inputValidities
    }
  }

  return state
};

const Registrarse = ({navigation}) => {
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
      dispatch(signup(formState.inputValues.email, formState.inputValues.password))
    }else{
      Alert.alert(
        'FORMULARIO INVALIDO',
        'INGRESA UN USUARIO Y CONTRASEÑA VALIDO',
        [{Text:'OK'}]
      )
    }
  }

  const onInputChange = useCallback((inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      input: inputIdentifier,
      value: inputValue,
      isValid: inputValidity
    });
  }, [formDispatch]);
  

  const image={uri:'https://images.unsplash.com/photo-1632758206257-4756558e98fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80'}
  
  return (
    
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    
      <LinearGradient colors={['#787A91','#000000']} style={styles.Gradient} start={{ x: 1, y: .7 } }
          end={{ x: .8, y: .9 }} stops={[0.5, 1]} >
          
        <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} opacity={0.4}>
        
          <KeyboardAvoidingView style={styles.container}  behavior='height' keyboardVerticalOffset={-50} >
              
              <ScrollView contentContainerStyle={styles.containerScroll} >
              <Text style={styles.Titulo}>REGISTRATE Y CONTINUA CON TU PLAN DE ENTRENAMIENTO</Text>
              
              <Card otherStyles={styles.Card}>


                  <View style={styles.containerIconInput} >
                    <Icon name="envelope-o" size={30} color="#fff" style={styles.Icon} />
                    <Input placeholder='Email' onInputChange={onInputChange} id='email'  autoCapitalize='none'   />
                  </View>

                  <View style={styles.containerIconInput} >
                    <Icon name="lock" size={30} color="#fff" style={styles.Icon} />
                    <Input placeholder='Contraseña' onInputChange={onInputChange} id='password'  secureTextEntry={true}  />
                  </View>

                  <Boton newStyles={styles.Boton} onPress={onHandleSignUp}>
                    REGISTRARSE
                  </Boton>
                  
                  <Text style={styles.Text}>Ya tenes una cuenta? <Text style={styles.Login} onPress={() => navigation.navigate('IniciarSesion')}>LogIn</Text></Text>
                </Card>
              </ScrollView>
              
          </KeyboardAvoidingView>
          
        </ImageBackground>
        
      </LinearGradient>
      
    </TouchableWithoutFeedback>
    
  )
}

export default Registrarse