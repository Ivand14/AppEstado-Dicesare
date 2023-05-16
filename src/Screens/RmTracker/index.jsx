import { View, Text,ImageBackground,FlatList, KeyboardAvoidingView, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import DatePicker from '@react-native-community/datetimepicker'
import Boton from '../../components/Buttons/index';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


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

    const rmListUrl= require('../../assets/image/rmList.jpg')


  return (
            <KeyboardAvoidingView behavior='height' style={styles.ImageBackground}>

                    <ImageBackground source={rmListUrl} style={styles.ImageBackground} >
                                <View style={styles.containerBackground}>
                                    <Input value={rm} onChangeText={onHandleRm} placeholder='Name' newStyle={styles.Input} />
                                    <Input value={weights} onChangeText={onHandleWeight} keyboardType='numeric' placeholder='Weight' newStyle={styles.Input}/>
                                    <TouchableOpacity onPress={onHandleViewDate}>
                                        <Icon name='calendar' size={30} color={'#fff'} />
                                    </TouchableOpacity>
                                    {showDate && (<DatePicker onChange={onHandleCurrentDate} value={date} mode='date' display='default'/>)}
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