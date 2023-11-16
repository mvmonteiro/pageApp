import React from 'react'
import Productors from './components/Productors'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

export default function Home(){
    return(
        <>
            <ScrollView>
                <SafeAreaView style={styles.areaView}>
                    <Productors />
                </SafeAreaView>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    areaView: {
        flex: 1
    }
})