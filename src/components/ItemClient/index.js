import React, { memo } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ItemClientProps {
    text: String,
    hour: String,
    onOptions: Function
}

function ItemClient({ text, hour, onOptions }: ItemClientProps) {

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
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    itemContainerMessage: {
        flexDirection: 'row', 
        backgroundColor: '#006AB8', 
        alignItems: 'flex-end', 
        maxWidth: '80%', 
        borderTopRightRadius: 20, 
        borderTopStartRadius: 20, 
        borderBottomStartRadius: 20, 
        borderBottomRightRadius: 0
    },
    textMessage: {
        fontSize: 15, 
        color: 'white', 
        paddingLeft: 15, 
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingRight: 5, 
        flexShrink: 1
    },
    textHour: {
        fontSize: 12, 
        marginBottom: 5, 
        marginRight: 8,
        color: 'white'
    }
});

export default memo(ItemClient);
