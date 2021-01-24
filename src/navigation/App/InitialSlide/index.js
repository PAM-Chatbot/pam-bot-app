import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//PAGES
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function AppBottomNavigator() {

    const Tab = createMaterialTopTabNavigator();

    const PersonTab = ({ state }) => {

        const routeIndex = state.index;

        return (
            <View style={style.containerTabBar}>
                <Text style={{ ...style.textPoint, color: (routeIndex == 0 ? 'red' : 'black') }}>.</Text>
                <Text style={{ ...style.textPoint, color: (routeIndex == 1 ? 'red' : 'black') }}>.</Text>
                <Text style={{ ...style.textPoint, color: (routeIndex == 2 ? 'red' : 'black') }}>.</Text>
            </View>
        );

    }

    return (
        <Tab.Navigator tabBar={PersonTab} lazy={true} tabBarPosition={'bottom'} swipeEnabled={false}>
            <Tab.Screen name="Page1" component={Page1} />
            <Tab.Screen name="Page2" component={Page2} />
            <Tab.Screen name="Page3" component={Page3} />
        </Tab.Navigator>
    );

}

const style = StyleSheet.create({
    containerTabBar: {
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 25, 
        alignSelf: 'center'
    },
    textPoint: {
        fontSize: 40, 
        margin: 3
    }
});

export default AppBottomNavigator;
