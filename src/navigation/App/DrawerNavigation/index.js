import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import NetInfo from "@react-native-community/netinfo";
import Icon from 'react-native-vector-icons/MaterialIcons';

//IMPORTANDO TELAS
import Chat from './Chat';
import About from './About';
import Config from './Config';

function AppDrawerNavigation() {

    const Drawer = createDrawerNavigator();

    useEffect(() => {

        var internet = NetInfo.addEventListener(state => {
            if(!state.isConnected && !state.isInternetReachable) {
                Alert.alert('Sem conexão', 'Opa, você está sem internet, para continuar conversando, conecte a uma rede.');
            }
        });

        return () => internet();

    }, []);

    const iconChat = ({ color }) => <Icon name={"chat"} size={18} color={color} />;
    const iconSettings = ({ color }) => <Icon name={"settings"} size={18} color={color} />;
    const iconAbout = ({ color }) => <Icon name={"info"} size={18} color={color} />;

    const PersonDrawer = (props) => {

        return (
            <>
                <ScrollView>
                    <View style={style.containerHeaderDrawer}>
                        
                    </View>
                    <DrawerItemList itemStyle={style.drawerItem} labelStyle={style.drawerLabel} {...props} />
                </ScrollView>
            </>
        )

    }

    return (
        <Drawer.Navigator screenOptions={{ swipeEnabled: false }} drawerContent={PersonDrawer} drawerPosition={'right'} drawerType={'slide'} keyboardDismissMode={'none'}>
            <Drawer.Screen name="Chat" options={{ drawerIcon: iconChat }} component={Chat} />
            <Drawer.Screen name="Config" options={{ drawerIcon: iconSettings, drawerLabel: 'Configurações' }} component={Config} />
            <Drawer.Screen name="About" options={{ drawerIcon: iconAbout, drawerLabel: 'Sobre' }} component={About} />
        </Drawer.Navigator>
    );

}

const style = StyleSheet.create({
    containerHeaderDrawer: {
        height: 140, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
        backgroundColor: '#C7C7C7',
        paddingRight: 5,
        paddingBottom: 5
    },
    drawerItem: {
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0, 
        marginTop: 0
    },
    drawerLabel: {
        fontSize: 16
    }
});

export default AppDrawerNavigation;
