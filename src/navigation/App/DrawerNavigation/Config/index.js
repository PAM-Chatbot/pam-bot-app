import React from 'react';
import { HeaderDefault } from '../../../../components';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

//Pages
import InitialConfig from './InitialConfig';
import MyData from './MyData';
import More from './More';

function AppStackNavigator() {

    const Stack = createStackNavigator();

    const { colors } = useTheme();

    const PersonHeader = ({ scene, navigation }) => {

        const { options } = scene.descriptor;

        return (
            <HeaderDefault 
                title={options.headerTitle}
                colors={colors}
                onNavigateRollback={navigation.goBack} 
            />
        );

    }

    return (
        <Stack.Navigator screenOptions={{ header: PersonHeader }}>
            <Stack.Screen name="InitialConfig" options={{ headerTitle: 'Configurações' }} component={InitialConfig} />
            <Stack.Screen name="MyData" options={{ headerTitle: 'Meus Dados' }} component={MyData} />
            <Stack.Screen name="More" options={{ headerTitle: 'Avançado' }}  component={More} />
        </Stack.Navigator>
    );

}

export default AppStackNavigator;
