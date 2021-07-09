import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';

const Stack = createStackNavigator();

function Routes(){
    return(
            <Stack.Navigator>
                <Stack.Screen 
                    name="home" 
                    component={Home}
                    options={{
                        title: 'Tortuga Coffee Shop',
                        headerTitleStyle:{
                            fontFamily: 'Montserrat_700Bold_Italic',
                            fontSize: 20
                        },

                        headerLeft: () => (
                            <TouchableOpacity>
                                <Ionicons 
                                name="fast-food-outline" 
                                size={24} 
                                color="black" 
                                style={{marginLeft: 20}}
                                onPress={() =>{}}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    
                />
                
            </Stack.Navigator>
    )
}

export default Routes;