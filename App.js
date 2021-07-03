import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import 'react-native-gesture-handler';
import { useFonts, Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import Routes from './src/router';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight, 
    Montserrat_400Regular, 
    Montserrat_400Regular_Italic, 
    Montserrat_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false}/>
      <Routes/> 
    </>
  );
}