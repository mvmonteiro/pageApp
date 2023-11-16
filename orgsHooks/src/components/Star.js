import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

import star from '../assets/images/estrela.png'
import starDark from '../assets/images/estrelaCinza.png'

export default function Star({ onPress, disabled=true, fill, grande }){
    const styles = stylesFunc(grande)
    
    const getImage = () => {
        if(fill){
            return star
        }
        return starDark
    }

    return(
        <TouchableOpacity 
            onPress={onPress}
            disabled={disabled}
        >
            <Image source={getImage()} style={styles.star} />
        </TouchableOpacity>
    )
}

const stylesFunc = (grande) => StyleSheet.create({
    star: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
})