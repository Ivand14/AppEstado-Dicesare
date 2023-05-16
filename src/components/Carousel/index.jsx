import { Dimensions, Text, View } from 'react-native'

import Carousel from 'react-native-snap-carousel'
import React from 'react'
import styles from './styles'

const CustomCarousel = ({children,NewStyle,...restProp}) => {
    
    const screenWidth=Dimensions.get('window').width
    
    return (
    <View style={{...styles.Carousel,...NewStyle}} >            
        <Carousel
            style={styles.CarouselContainer}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            layout={'tinder'}
            loop={true}
            layoutCardOffset={20}
            swipeThreshold={50}
            {...restProp}
        >{children}</Carousel>
    </View>
    )
}

export default CustomCarousel