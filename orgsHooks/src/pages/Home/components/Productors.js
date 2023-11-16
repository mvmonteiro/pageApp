import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { loadProductors } from '../../../services/loadData';
import Top from './Top';
import Productor from './Productor';

export default function Productors(){
    const [title, setTitle] = useState('')
    const [list, setList] = useState([])

    useEffect( () => {
        const response = loadProductors()
        setTitle(response.titulo)
        setList(response.lista)
    }, [])

    return(
        <>
            <Top />
            
            <Text style={styles.title} >{ title }</Text>

            <Productor list={list}/>
            
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646"
    },
    legend: {
        
    }
})