import React, { useEffect } from 'react';
import { Text, StyleSheet, Alert, BackHandler } from 'react-native';
import { DefaultContainer, PersonButton } from '../../../../components';
import NetInfo from "@react-native-community/netinfo";

export default function Page1({ navigation }) {

   /*useEffect(() => {

      NetInfo.addEventListener(state => {

         if(!state.isConnected && !state.isInternetReachable) {
            
            Alert.alert(
               'Sem conexão',
               'Opa, você está sem internet, por favor antes de usar se conecte a uma rede.',
               [ { text: 'Sair', onPress: () => BackHandler.exitApp() } ]
            );

         }

      });

   }, []);*/

   return (
      <DefaultContainer style={style.container}>
         <Text style={style.title}>Olá,</Text>
         <Text style={style.description}>Sou sua nova amiga para conversas diárias. Sempre que precisar, agora você terá com quem conversar</Text>
         <Text style={{ ...style.description, textAlign: 'center' }}>Vamos lá?</Text>      
         <PersonButton 
            text={"Prosseguir"} 
            press={() => navigation.navigate("Page2")} 
            colorBackground={'#02F5E6'}
            activeColor={'#FFFFFF'} 
            colorBorder={'#02F5E6'}
            colorText={'#000000'}
         />
      </DefaultContainer>
   );
}

const style = StyleSheet.create({
   container: {
      paddingLeft: 20, 
      paddingRight: 20
   },
   title: {
      fontSize: 30, 
      textAlign: 'center'
   },
   description: {
      fontSize: 20, 
      textAlign: 'justify'
   }
});
