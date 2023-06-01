// import { Text, View } from "react-native";

// import Boton from "../../components/Buttons";
// import Card from "../../components/Card";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { ImageBackground } from "react-native";
// import Input from "../../components/Input";
// import { Keyboard } from "react-native";
// import { KeyboardAvoidingView } from "react-native";
// import {LinearGradient} from "expo-linear-gradient";
// import React from "react";
// import { TouchableWithoutFeedback } from "react-native";
// import styles from "./styles";

// const IniciarSesion = ({navigation}) => {

//     const image= {uri:'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}

    
//     return (
//     <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        
//         {/* <LinearGradient colors={['#fff','#000000']} style={styles.Gradient} start={{ x: .1, y: .6 } }
//           end={{ x: .7, y: .9 }} >
//             <ImageBackground source={image} style={styles.ImageBackground} opacity={0.5} >
//                 <Text style={styles.Titulo}>BIENVENIDO A WARRIORS</Text>
//                     <KeyboardAvoidingView behavior="height">
//                         <Card otherStyles={styles.CardLogin}>

//                             <View style={styles.containerInputIcon}>
//                                 <Icon name="user" size={30} color={'#fff'} style={styles.Icon}/>
//                                 <Input placeholder='Email' keyboardType='email-address' autoCapitalize='none' newStyle={styles.Input}  />                   
//                             </View>

//                             <View style={styles.containerInputIcon}>
//                                 <Icon name="lock" size={30} color={'#fff'} style={styles.Icon}/>
//                                 <Input placeholder='Password' autoComplete='password' secureTextEntry={true} newStyle={styles.Input} />                                         
//                             </View>
//                             <Boton newStyles={styles.BotonLogin} onPress={()=>navigation.navigate('Home')}>INICIAR SESION</Boton>
//                         </Card>
//                     </KeyboardAvoidingView>
            
//             </ImageBackground>
//         </LinearGradient> */}
        
        
//     </TouchableWithoutFeedback>
//     );
// };

// export default IniciarSesion;
