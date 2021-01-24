import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, ToastAndroid, TextInput, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useTheme } from '@react-navigation/native';
import utils from '../../../../../utils';
import { PersonButton, DefaultContainer, MenuItem } from '../../../../../components';

function MyData({ user, dispatch }) {

    const { colors } = useTheme();
    
    const [ editableFields, setEditableFields ] = useState(false);    
    const [ image, setImage ] = useState(user.icon);
    const [ telephone, setTelephone ] = useState(utils.FormatTelephone(user.telephone));
    const [ email, setEmail ] = useState(user.email);

    function getImage() {
        if (editableFields)
            ImagePicker.launchImageLibrary({}, response => {
                if ((response.fileSize / 1024 / 1024) < 1.5) 
                    setImage(`data:${response.type};base64,${response.data}`);
                else if((response.fileSize / 1024 / 1024) > 1.5)
                    ToastAndroid.showWithGravity("Insera uma imagem com até 1.5MB", ToastAndroid.LONG, ToastAndroid.BOTTOM);
            }); 
    }

    function updateUser() {
        if (editableFields) {            
            if(!utils.FormatEmail(email))
                ToastAndroid.showWithGravity("E-mail incorreto, por favor corriga-o!", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            else if (telephone.length != 15) 
                ToastAndroid.showWithGravity("Telefone incorreto, por favor corriga-o!", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            else {
                dispatch({ type: "UPDATE_USER", icon: image, email, telephone });
                setEditableFields(false);
                ToastAndroid.showWithGravity("Alterado com sucesso!", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            }
        }
    }

    return (
        <DefaultContainer style={style.container}>
            <View style={style.containerPhoto}>
                <Image style={style.photo} resizeMode={'cover'} source={{ uri: image }} />
                <MenuItem 
                    iconName={"camera-alt"} iconColor={"white"}  iconSize={30} 
                    style={{ ...style.styleIcon, backgroundColor: (editableFields ? '#02F5E6' : "#979291") }} 
                    borderRadius={30} underlayColor={'#C7C7C7'} onPress={getImage} />
            </View>
            <TextInput
                style={{ ...style.input, borderColor: colors.primary, color: (editableFields ? colors.primary : colors.border) }}
                autoCorrect={true}
                keyboardType={'email-address'}
                editable={editableFields}
                autoCapitalize={'none'}
                value={email}
                onChangeText={value => setEmail(value.replace(/\s+/g, ""))}
            />
            <TextInput
                style={{ ...style.input, borderColor: colors.primary, color: (editableFields ? colors.primary : colors.border) }}
                keyboardType={'numeric'}
                editable={editableFields}
                value={telephone}
                onChangeText={value => setTelephone(utils.FormatTelephone(value))}
                maxLength={15}
            />
            <View style={style.containerButtons}>
                <PersonButton 
                    text={"Editar dados"} 
                    press={() => setEditableFields(true)} 
                    colorBackground={'#02F5E6'}
                    activeColor={'#FFFFFF'} 
                    colorBorder={'#02F5E6'}
                    colorText={'#000000'}
                />
                <PersonButton 
                    text={"Salvar dados"} 
                    press={updateUser} 
                    disabled={!editableFields}
                    colorBackground={(!editableFields ? "#B7B6B6" : "#02F5E6")}
                    activeColor={'#FFFFFF'}  
                    colorBorder={(!editableFields ? "#B7B6B6" : "#02F5E6")}
                    colorText={'#000000'}
                />
            </View>
        </DefaultContainer>
    );
}

const style = StyleSheet.create({
    container: { 
       paddingLeft: 30, 
       paddingRight: 30 
    },
    containerButtons: {
       flexDirection: 'row', 
       justifyContent: 'space-evenly', 
       marginTop: 15
    },  
    containerPhoto: {
       flexDirection: 'row',
       justifyContent: 'center', 
       alignItems: 'flex-end'
    },
    photo: {
       width: 120, 
       height: 120, 
       borderRadius: 60,
       marginRight: -50
    },
    title: {
       fontSize: 20, 
       textAlign: 'center'
    },
    containerStyleIcon: {
       marginLeft: 70, 
       marginTop: -30
    },
    styleIcon: {
        paddingTop: 12, 
        paddingBottom: 12
    },
    input: {
       marginBottom: 20, 
       borderBottomWidth: 0.6, 
       fontSize: 17
    }
});

export default connect(state => ({ user: state.User }))(MyData);