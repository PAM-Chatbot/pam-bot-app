import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';

interface OverlayProps {
    open: Boolean,
    onClose: Function
}

function Overlay ({ open, onClose, children }: OverlayProps) {
    
    return (
        <Modal visible={open} transparent={true} animationType={'fade'} onRequestClose={() => onClose({ visible: false, message: '' })} 
            hardwareAccelerated={true}>
            <View style={style.overlay} onStartShouldSetResponder={() => onClose({ visible: false, message: '' })} />
            <View style={style.containerContent}>
                {children}
            </View>
        </Modal> 
    );

}

const style = StyleSheet.create({
    overlay: { 
        flex: 1, 
        backgroundColor: '#000000', 
        opacity: 0.6 
    },
    containerContent: { 
        backgroundColor: 'white', 
        position: 'absolute', 
        width: '100%', 
        paddingBottom: 30, bottom: 0 
    }
});

export default Overlay;