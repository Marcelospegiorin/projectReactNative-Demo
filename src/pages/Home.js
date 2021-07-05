import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

import New from '../components/New';

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{backgroundColor: '#FFF',}}
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

                <New
                    cover={require('../assets/costelacardapio.jpg')}
                    name="Costela"
                    description="Costela assada ao molho barbecue + frango empanado frito + batatas fritas especiais."
                    onPress={() =>{navigation.navigate('detail')}}
                />

                <New
                    cover={require('../assets/chickenandfries.jpg')}
                    name="Frango Empanado Frito"
                    description="SUPER FRIED é o clássico americano frango empanado frito + batatas especiais que você só encontra aqui."
                    onPress={() =>{ }}
                />

                <New
                    cover={require('../assets/batata.png')}
                    name="Batata frita com cheedar e bacon"
                    description="Batata frita com aquele cheedar e bacon, perfeito pra acompanhar sua brejinha."
                    onPress={() =>{ }}
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