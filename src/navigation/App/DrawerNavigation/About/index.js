import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { DefaultContainer, HeaderDefault } from '../../../../components';

export default function About({ navigation }) {

    const { colors } = useTheme();
    
    return (
        <>
            <HeaderDefault 
                title={"Sobre"} 
                colors={colors} 
                onNavigateRollback={navigation.goBack} 
            />
            <DefaultContainer style={{ margin: 20 }}>
                <Text style={{ ...style.title, color: colors.text }}>Pam</Text>
                <Text style={{ ...style.description, color: colors.text }}>
                    O intuito deste app, é que ele seja um agente psicológico, que 
                    por meio de diálogos direitos com os pacientes, 
                    consiga analisar padrões de conversa e diagnosticar se o 
                    mesmo está sofrendo de algum distúrbio psicológico, podendo assim dar 
                    sugestões para a melhora do paciente ou então encaminhá-lo para um especialista da área.
                </Text>
                <Text style={{ textAlign: 'center', color: colors.text }}>Versão 1.0</Text>
            </DefaultContainer>
        </>
    );

};

const style = StyleSheet.create({
    title: {
       fontSize: 30, 
       textAlign: 'center'
    },
    description: {
       fontSize: 20, 
       textAlign: 'justify'
    }
});