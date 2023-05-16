import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import Card from '../../components/Card'
import CustomCarousel from '../../components/Carousel'
import { Dimensions } from 'react-native'
import { ImageBackground } from 'react-native'
import WarmUpsData from '../../data/WarmupsData'
import { styles } from './styles'

const WarmUps = () => {

    const [warmups,setWarmUps]=useState([])

    useEffect(()=>{
        setWarmUps(WarmUpsData)
    },[])

    const screenWidth=Dimensions.get('window').width
    
    return (
        <ImageBackground source={require('../../assets/image/warmups2.jpg')} style={styles.Container} >
            <View style={styles.ContainerCarousel}>
                <CustomCarousel
                    data={warmups}
                    renderItem={({item})=>(
                        <Card otherStyles={styles.itemContainer}>
                            <View>
                                <Text style={styles.TitleCarousel}>{item.title}</Text>
                                <Text style={styles.TextCarousel}>{item.Ejercicio[0]}</Text>
                                <Text style={styles.TextCarousel}>{item.Ejercicio[1]}</Text>
                                <Text style={styles.TextCarousel}>{item.Ejercicio[2]}</Text>
                                <Text style={styles.TextCarousel}>{item.Ejercicio[3]}</Text>
                            </View>
                        </Card>
                    )}
                />
            </View>

        </ImageBackground>
    )
}

export default WarmUps