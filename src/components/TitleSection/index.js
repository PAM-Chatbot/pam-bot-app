import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TitleSectionProps {
    title: String
}

function TitleSection({ title }: TitleSectionProps) {

    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemContainerText}>{title}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginBottom: 20,
        marginTop: 10
    },
    itemContainerText: {
        backgroundColor: '#5c5c8a', 
        paddingLeft: 20, 
        paddingRight: 20,
        paddingTop: 3,
        paddingBottom: 4, 
        borderRadius: 20,
        color: '#fff'
    }
});

export default memo(TitleSection);