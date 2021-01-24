import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MenuItem } from '../index';


interface HeaderChatProps {
    title: String,
    icon: String,
    connected: Boolean,
    onDrawerPress: Function,
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

function HeaderChat({ title, icon, connected, onDrawerPress, colors }: HeaderChatProps) {
    
    return (
        <View style={style.containerStack}>
            <View style={style.containerPhoto}>
                <Image style={style.photo}  source={{ uri: icon }} />
                <MenuItem iconName={"brightness-1"} style={style.iconUseOn} iconColor={connected ? 'green' : 'red'} iconSize={15} />
            </View>
            <Text style={{ ...style.title, color: colors.primary }}>{title}</Text>
            <MenuItem 
                iconName={"dehaze"} iconColor={colors.primary} iconSize={35} 
                onPress={() => onDrawerPress()} style={style.icon}
                pressColor={'#B7B6B6'} />
        </View>
    );

};

const style = StyleSheet.create({
    containerStack: { 
        marginTop: -3,
        elevation: 2, 
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomWidth: 0.1,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1, 
        fontWeight: 'bold', 
        fontSize: 20,
        marginLeft: 8,
        textAlign: 'center'
    },
    icon: {
        padding: 3
    },
    iconUseOn: {
        padding: 3, 
        marginBottom: 3.5
    },  
    containerPhoto: {
        flexDirection: 'row', 
        alignItems: 'flex-end'
    },
    photo: {
        width: 40, 
        height: 40, 
        borderRadius: 30,
        marginRight: -19
    }
});

export default memo(HeaderChat);
