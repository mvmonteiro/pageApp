import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import logo from '../../../assets/images/logo.png';

import { loadTopo } from '../../../services/loadData';

 class Top extends React.Component {
    // utilização de class para renderização única e poupar o usuário de carregar dados
    state = {
        topo: {
            boasVindas: "",
            legenda: ""
        }
    } 

    updateTop(){
        const response = loadTopo();
        this.setState({ topo: response }) 
        // console.log(response);
    }

    componentDidMount() {   // faz com que seja montado somente uma vez
        this.updateTop();
    }

    render(){
        return(
            <>
                <View style={styles.container}>
                    <Image source={logo} style={styles.image} />
                    <Text style={styles.welcomeText} >{ this.state.topo.boasVindas }</Text>
                    <Text style={styles.subText} >{ this.state.topo.legenda }</Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    welcomeText: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646"
    },
    subText: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    }
})

export default Top;