import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

import Porcoes from '../components/Porcoes';
import Bebidas from '../components/Bebidas';

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{backgroundColor: '#f0f0f0',}}
        >

            <View style={styles.header}>
                
                <View style={styles.InputArea}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput 
                        placeholder="O que está procurando?"
                        style={styles.input}
                    />
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Porções</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}> 

                <Porcoes
                    cover={require('../assets/costelacardapio.jpg')}
                    name="Costela"
                    description="Costela assada ao molho barbecue + frango empanado frito + batatas fritas especiais."
                    onPress={() =>{}}
                    price="R$ 79,90"
                />

                <Porcoes
                    cover={require('../assets/chickenandfries.jpg')}
                    name="Frango Empanado Frito"
                    description="SUPER FRIED é o clássico americano frango empanado frito + batatas especiais que você só encontra aqui."
                    price="R$ 40,00"
                    onPress={() =>{}}
                />

                <Porcoes
                    cover={require('../assets/batata.png')}
                    name="Batata frita com cheedar e bacon"
                    description="Batata frita com aquele cheedar e bacon, perfeito pra acompanhar sua brejinha."
                    onPress={() =>{}}
                    price="R$ 35,00"
                />

    
            </ScrollView>

            <View>
                <Text style={[styles.title, { marginTop: 20}] }>Bebidas</Text>                
            </View>
             
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>

                <Bebidas
                    cover={require('../assets/caipvodka.png')}
                    price={'R$ 7,00'}
                    description={'O gatilho começa quando você dá de cara com uma promo dessas: CAIPIVODKA EM DOBRO'}
                />
                <Bebidas
                    cover={require('../assets/negronibebida.png')}
                    price={'R$ 8,90'}
                    description={'Nada melhor que uma bebida pra aquecer sua noite, feita com gím, vermute rosso e campari!'}
                />
                <Bebidas
                    cover={require('../assets/gin.png')}
                    price={'R$ 9,90'}
                    description={'Experimente nosso gin tropical e deixe-se levar por esse doce balanço. Cheers!🍹'}
                />

            </ScrollView>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    InputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
    },
    input:{
        fontFamily: 'Montserrat_400Regular',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%',        
    },
    contentNew:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    title:{
        paddingHorizontal: 20,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    },
});