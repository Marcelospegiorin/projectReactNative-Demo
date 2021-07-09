import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { useFonts, Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_400Regular_Italic,Montserrat_300Light, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo} from '@expo/vector-icons'

/*Pages*/
import Routes from './src/router';
import Detail from './src/pages/Detail';
import Profile from './src/pages/Profile';
import WhereFindUs from './src/pages/WhereFindUs';


export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight, 
    Montserrat_400Regular, 
    Montserrat_400Regular_Italic, 
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_600SemiBold,
    Montserrat_300Light
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }
  
  const Tab = createBottomTabNavigator();


  return (
    <>
      <StatusBar style="dark" backgroundColor="#000" translucent={false}/>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style:{
              alignItems:'center',
              height: 48
            },
            activeTintColor:'#000',
            tabStyle:{
              paddingBottom:5,
              padding:5,
            },

          }}
        >
          <Tab.Screen 
            name="Cardápio" 
            component={Routes} 
            options={{
              tabBarIcon: ({color}) => (
                <Entypo name="open-book" size={24} color={color}/>
              )
            }}
          />

          <Tab.Screen 
            name="Carrinho" 
            component={Detail} 
            options={{
              tabBarIcon: ({color}) => (
                <Entypo  name="shopping-cart" size={24} color={color}/>
              )
            }}
          />

          <Tab.Screen 
            name="Mapa" 
            component={WhereFindUs} 
            options={{
              tabBarIcon: ({color}) => (
                <Entypo  name="map" size={24} color={color}/>
              )
            }}
          />

          <Tab.Screen 
            name="Perfil" 
            component={Profile} 
            options={{
              tabBarIcon: ({color}) => (
                <Entypo  name="user" size={24} color={color}/>
              )
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}