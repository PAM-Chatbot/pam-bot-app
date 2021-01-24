import React from 'react';
import { View, StyleSheet, Switch, ToastAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { MenuItem, DefaultContainer } from '../../../../../components';

function More({ app, dispatch }) {

    const { colors } = useTheme();
    
    const options = { 
        title: 'Selecione um plano de fundo', 
        takePhotoButtonTitle: null,
        chooseFromLibraryButtonTitle: 'Imagem',
        customButtons: [ 
            { title: 'Predefinido', name: 'initial' } 
        ]
    }

    function getImageBackground() {
        ImagePicker.showImagePicker(options, response => {
            if (response.customButton) {
                dispatch({ type: "MODIFY_BACKGROUND_CHAT", background: undefined });
                ToastAndroid.showWithGravity("Predefinição ativa", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            }
            else if ((response.fileSize / 1024 / 1024) < 1.5) {
                dispatch({ type: "MODIFY_BACKGROUND_CHAT", background: `data:${response.type};base64,${response.data}` });
                ToastAndroid.showWithGravity("Imagem adicionada com sucesso!", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            }
            else if((response.fileSize / 1024 / 1024) > 1.5)
                ToastAndroid.showWithGravity("Essa imagem é muito grande, por favor escolha uma imagem com até 1.5MB", Toast.LONG, Toast.BOTTOM);
        }); 
    }

    return (
        <DefaultContainer noCentered>
            <View style={styles.containerOptions}>
                <MenuItem 
                    iconName={"brightness-medium"} iconColor={'#5c5c8a'}  iconSize={25} 
                    label={'Tema'} style={{ ...styles.text, color: colors.primary }}
                    underlayColor={'#C7C7C7'} />
                <Switch 
                    value={app.dark ? true : false} 
                    ios_backgroundColor="#3e3e3e" 
                    onValueChange={() => dispatch({ type: 'CHANGE_MODIFY' })} 
                    trackColor={{ false: '#B7B6B6', true: '#000000' }} 
                    thumbColor={colors.primary} 
                />
            </View>
            <MenuItem 
                    iconName={"insert-photo"} iconColor={'#5c5c8a'} iconSize={25} 
                    label={"Fundo"} style={{ ...styles.text, marginLeft: 3, color: colors.primary }}
                    pressColor={'#C7C7C7'} onPress={getImageBackground} />
        </DefaultContainer>
    );

};

const styles = StyleSheet.create({
    containerOptions: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingLeft: 3,
        paddingRight: 5
    },
    text: {
        fontSize: 18,
        padding: 10
    }
});

export default connect(state => ({ app: state.App }))(More);