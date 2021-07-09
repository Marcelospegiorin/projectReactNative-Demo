import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function New(props) {
    return (
        <TouchableOpacity onPress={(props.onPress)} style={styles.container}>
            <Text style={styles.badge}>Novo</Text>
            <Image 
                source={props.cover}
                style={styles.cover}
            />

            <View style={styles.content}>
                <Text style={styles.title}>{props.name}</Text>

                <View style={styles.dot}>
                </View>               

            </View>

            <Text style={styles.description}>
                {props.description}
            </Text>

            <View style={styles.footer}>    
                <View style={{width: '80%'}}>
                    <Text style={styles.price}>{props.price}</Text>
                </View>
                <View style={{ width: '20%'}}>
                    <Ionicons name="ios-add-circle" size={24} color="black"/>
                </View>
            </View>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 265,
        width: 220,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 2,
        borderRadius: 15,
        padding: 15,
        paddingTop: 5,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 4,
        alignItems: 'center'
    },
    cover:{
        width: 180,
        height: 120,
        borderRadius: 10,
    },
    content:{
        
        alignItems: 'center',
        marginVertical: 10,
    },
    title:{
        fontFamily: 'Montserrat_700Bold_Italic',
        fontSize: 12,
        color: '#4f4a4a',
        textAlign: 'center'
    },
    badge:{
        color: 'red',
        fontSize: 9,
        fontFamily: 'Montserrat_700Bold', 
    },
    description:{
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 11,
        color: '#4f4a4a',
        textAlign: 'auto',
        height: 45
    },
    footer:{
        flexDirection: 'row',
        marginTop: 7,
        alignItems: 'center',
        width: '100%'
    },
    price:{
        fontSize: 15,
        fontFamily: 'Montserrat_400Regular',
        marginBottom: 5,
    }
});