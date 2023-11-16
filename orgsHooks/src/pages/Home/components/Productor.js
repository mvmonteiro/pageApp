import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Productor({ list }){

    return(
        <>
            {list.map( (productor) => (
                <View key={productor.nome} style={styles.container} >
                    <Image source={productor.imagem} accessibilityLabel={productor.nome} style={styles.image}/>
                    <View style={styles.info} >
                        <Text style={styles.name} >{productor.nome}</Text>
                        <Text style={styles.distance} >{productor.distancia}</Text>
                        
                    </View>
                </View>
            ))}
        </>
        // <Text>nome</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        // shadow Android
        elevation: 4,
        // shadow IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 8,
        marginVertical: 16,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    distance: {
        fontSize: 12,
        lineHeight: 19
    }
})