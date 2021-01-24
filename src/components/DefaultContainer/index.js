import React from 'react';
import { View, Text, ScrollView, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface DefaultContainerProps {
    noCentered: Boolean, 
    style: StyleProp<ViewStyle>
}

function DefaultContainer({ noCentered, style, children }: DefaultContainerProps) {

    return (
        <View style={styles.body}>
            <ScrollView contentContainerStyle={[styles.scrollview, 
                { justifyContent: (noCentered ? 'flex-start' : 'center') }]}>
                <View style={[style, { height: (noCentered ? '100%' : '80%'), 
                    justifyContent: (noCentered ? 'flex-start' : 'space-evenly') }]}>
                    {children}
                </View>
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    scrollview: {
        flexGrow: 1
    } 
});

export default DefaultContainer;