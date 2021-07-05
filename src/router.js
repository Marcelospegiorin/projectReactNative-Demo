import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="home" 
                    component={Home}
                    options={{
                        title: 'Tortuga Coffee Shop',
                        headerTitleStyle:{
                            fontFamily: 'Montserrat_700Bold'
                        },

                        headerRight: () => (
                            <TouchableOpacity>
                                <Ionicons 
                                name="fast-food-outline" 
                                size={24} 
                                color="black" 
                                style={{marginRight: 20}}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen name="detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;