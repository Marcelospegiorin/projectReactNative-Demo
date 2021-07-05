import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { useFonts, Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic} from '@expo-google-fonts/montserrat'
import Routes from './src/router';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight, 
    Montserrat_400Regular, 
    Montserrat_400Regular_Italic, 
    Montserrat_700Bold,
    Montserrat_700Bold_Italic
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false}/>
      <Routes/>
    </>
  );
}