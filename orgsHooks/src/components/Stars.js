import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Star from './Star'

export default function Stars({quantidade, editavel=false, grande}){
    const [newQuantity, setNewQuantity] = useState(quantidade)

    const RenderStars = () => {
        const starsList = []
        for(let i=0; i<5; i++){
            starsList.push(
                <Star
                    key={i}
                    onPress={() => setNewQuantity(i + 1)} 
                    disabled={!editavel}
                    fill={i < newQuantity}
                    grande={grande}
                />
            )
        }
        return starsList
    }
    
    return(
        <View style={styles.container}>
            <RenderStars />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
})