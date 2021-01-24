import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';

//PAGES
import InitialSlide from './InitialSlide';
import Home from './DrawerNavigation';

//THEMES
import Themes from '../../Themes';

function AppContainer({ app }) {

    const Drawer = createDrawerNavigator();
    
    return (
        <NavigationContainer theme={app.dark ? Themes.Dark : Themes.Light}>
            <Drawer.Navigator screenOptions={{ swipeEnabled: false }} backBehavior={'none'} initialRouteName={app.initialized_chat ? "Home" : "InitialSlide"}>
                <Drawer.Screen name="InitialSlide"  component={InitialSlide} />
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    );    
    
}

export default connect(state => ({ app: state.App }))(AppContainer);
    