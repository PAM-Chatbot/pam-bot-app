import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface MenuItemProps {
    label: String,
    iconName: String,
    iconSize: Number,
    onPress: Function,
    style: StyleProp<TextStyle>,
    iconColor: String,
    pressColor: String
}

function MenuItem (props: MenuItemProps) {
    
    return (
        
        <Icon.Button {...props} iconStyle={style.icon} color={props.iconColor}
            size={props.iconSize} name={props.iconName} underlayColor={props.pressColor}>
            {(props.label ? <Text style={props.style}>{props.label}</Text> : <></>)}
        </Icon.Button>

    );

}

MenuItem.defaultProps = {
    borderRadius: 0,
    backgroundColor: "transparent"
}

const style = StyleSheet.create({

    icon: {
        marginRight: 0, 
        marginTop: -5, 
        marginBottom: -5
    }

});

export default MenuItem;