import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Bebidas({cover, price, description}) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View>
                    <Image 
                        source={cover}
                        style={styles.cover}
                    />
                </View>

                <View style={styles.content}>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                    <Text style={styles.price}> {price} </Text>
                    <Entypo name='circle-with-plus' />
                </View>
        
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 295,
        height: 120,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10,
        marginBottom: 15
    },
    cover:{
        borderRadius: 10,
        width: 120,
        height: 105
    },
    content:{
        width: '60%',
        paddingHorizontal: 10,
        height: '100%',
        alignItems: 'flex-end'
    },
    description:{
        fontSize: 11,
        fontFamily: 'Montserrat_300Light',
        paddingBottom: 10,
        height: 65,
        width: 155
    },
    price:{
        fontSize: 14,
        fontFamily: 'Montserrat_700Bold',
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})