import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MenuItem, DefaultContainer } from '../../../../../components';

export default function InitialConfig({ navigation }) { 
    
    const { colors } = useTheme();

    return (
        <DefaultContainer noCentered>
            <MenuItem 
                iconName={"person"} iconColor={'#5c5c8a'}  iconSize={25} 
                label={'Meus dados'} style={{ ...style.text, color: colors.primary }} 
                pressColor={'#C7C7C7'} onPress={() => navigation.navigate('MyData')} />
            <MenuItem iconName={"add"} iconColor={'#5c5c8a'}  iconSize={25} 
                label={'Avançado'} style={{ ...style.text, color: colors.primary }} 
                pressColor={'#C7C7C7'} iconColor={'#5c5c8a'} onPress={() => navigation.navigate('More')} />
        </DefaultContainer>
    );

}

const style = StyleSheet.create({
    text: {
        padding: 10,
        fontSize: 19
    }
});
