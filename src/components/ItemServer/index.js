import React, { memo } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ItemServerProps {
    text: String,
    hour: String,
    onOptions: Function
}

function ItemServer({ text, hour, onOptions }: ItemServerProps) {

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.itemContainerMessage} onLongPress={() => onOptions({ visible: true, message: text })}>
                <Text style={styles.textMessage}>{text}</Text>
                <Text style={styles.textHour}>{hour}</Text>
            </TouchableOpacity>
        </View>
    );
    
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    itemContainerMessage: {
        flexDirection: 'row', 
        backgroundColor: '#D7DDDE', 
        alignItems: 'flex-end', 
        maxWidth: '80%', 
        borderTopRightRadius: 20, 
        borderTopStartRadius: 20, 
        borderBottomStartRadius: 0, 
        borderBottomRightRadius: 20
    },
    textMessage: {
        fontSize: 15, 
        paddingLeft: 11, 
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingRight: 5, 
        color: '#000000',
        flexShrink: 1
    },
    textHour: {
        fontSize: 12, 
        color: '#000000',
        marginBottom: 5,
        marginRight: 12
    }
});

export default memo(ItemServer);


