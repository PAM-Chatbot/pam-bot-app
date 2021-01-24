import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../index';

interface HeaderDefaultProps {
    title: String,
    onNavigateRollback: Function,
    colors: { 
        dark: Boolean, 
        colors: {
            background: String, 
            border: String, 
            card: String, 
            primary: String,
            text: String
        }
    }
}

function HeaderDefault ({ title, onNavigateRollback, colors }: HeaderDefaultProps) {
    
    return (
        <View style={style.containerStack}>
            <MenuItem 
                iconName={"arrow-back"} iconColor={colors.primary} iconSize={30} 
                style={style.icon} onPress={() => onNavigateRollback()}
                pressColor={'#C7C7C7'} />
            <Text style={{ ...style.title, color: colors.primary }}>{title}</Text>
        </View>
    );

}

const style = StyleSheet.create({
    containerStack: { 
        marginTop: -3,
        elevation: 2, 
        paddingLeft: 3,
        borderBottomWidth: 0.1,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        paddingLeft: 5,
        fontWeight: 'bold', 
        fontSize: 20,
        textAlign: 'center'
    },
    icon: {
        padding: 3
    }
});

export default HeaderDefault;