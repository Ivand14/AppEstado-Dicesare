import { FlatList, ImageBackground, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Boton from '../../components/Buttons/index';
import DatePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../../components/Input'
import {LinearGradient} from 'expo-linear-gradient';
import styles from './styles';

const RmTracker = () => {

    const [rm,setRm]=useState('')
    const [weights,setWeights]=useState('')
    const [showDate,setShowDate]=useState(false)
    const [date,setDate]=useState(new Date())
    const [listRm,setListRm]=useState([])

    const onHandleRm = text => {
        setRm(text)
    }
    
    const onHandleWeight=number=>{
        setWeights(number)
    }
    
    const onHandleCurrentDate=(event,selected)=>{
        const currentDate= selected || date
        setDate(currentDate)
        setShowDate(false)
    }
    
    const onHandleViewDate=()=>{
        setShowDate(true)
    }
    
    const onHandleListRm=()=>{
        setListRm(RmTracker=>[...RmTracker,{name:rm,weight:weights,id:Math.random().toString(),date:date}])
        setRm('')
        setWeights('')
    }

    const onHandleDelete=item=>{
        setListRm(RmTracker=>RmTracker.filter(RmName=>RmName.id !== item.id))
    }

    const renderItem=({item})=>(
            <View key={item.id}  style={styles.List} >
                <Text style={styles.datos}>NAME: {item.name}</Text>
                <Text style={styles.datos}>WEIGHT: {item.weight} kg</Text>
                <Text style={styles.datos}>DATE: {date.toDateString()}</Text>
                <TouchableOpacity onPress={()=>onHandleDelete(item)}>
                    <Icon name="trash" size={25} color={'red'} />
                </TouchableOpacity>
            </View>
    )



  return (
    <KeyboardAvoidingView behavior='height' style={styles.ImageBackground}>

        <ImageBackground source={{uri:'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80'}} style={styles.ImageBackground} >
            
            <LinearGradient colors={['#000','#fff']} start={{x:.6,y:.3}} end={{x:1,y:.4}} style={styles.gradient}/>
                <View style={styles.containerBackground}>
                    <Input value={rm} onChangeText={onHandleRm} placeholder='Name' newStyle={styles.Input} />
                    <Input value={weights} onChangeText={onHandleWeight} keyboardType='numeric' placeholder='Weight' newStyle={styles.Input}/>
                    <TouchableOpacity onPress={onHandleViewDate}>
                        <Icon name='calendar' size={30} color={'#fff'} />
                    </TouchableOpacity>
                    {showDate && (<DatePicker  onChange={onHandleCurrentDate} value={date} mode='date' display='default'/>)}
                </View>
        </ImageBackground>
        <View style={styles.ContainerList}>
            <FlatList data={listRm} renderItem={renderItem} keyExtractor={item=>item.id}  />
            <Boton  onPress={onHandleListRm} newStyles={styles.BotonAdd}>ADD</Boton>
        </View>
                
    </KeyboardAvoidingView>
  )
}

export default RmTracker