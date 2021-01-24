import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { DefaultContainer, PersonButton } from '../../../../components';
import utils from '../../../../utils';

export default function Page2({ navigation }) {

    const [ telephone, setTelephone ] = useState('');
    const [ email, setEmail ] = useState('');

    function nextPage() {
        if (!utils.FormatEmail(email)) 
            ToastAndroid.showWithGravity("E-mail incorreto, por favor corriga-o!", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        else if (telephone.length != 15) 
            ToastAndroid.showWithGravity("Telefone incorreto, por favor corriga-o!", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        else
            navigation.navigate("Page3", { email, telephone: telephone.replace(/[^a-zA-Z0-9]+/g, '') });
    }

    return (
        <DefaultContainer style={style.container}>
            <Text style={style.title}>Antes de começar, preciso que você me informe alguns dados.</Text>
            <TextInput
                placeholderTextColor={'#B7B6B6'}
                placeholder={"E-mail"}
                style={style.input}
                autoCorrect={true}
                autoFocus={true}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                value={email}
                onChangeText={value => setEmail(value.replace(/\s+/g, ""))}
                onSubmitEditing={nextPage}
            />
            <TextInput
                placeholderTextColor={'#B7B6B6'}
                placeholder={"Telefone celular com DDD..."}
                style={style.input}
                keyboardType={'numeric'}
                value={telephone}
                onChangeText={value => setTelephone(utils.FormatTelephone(value))}
                maxLength={15}
                onSubmitEditing={nextPage}
            />
            <PersonButton 
                text={"Próximo"} 
                press={nextPage} 
                colorBackground={'#02F5E6'}
                activeColor={'#FFFFFF'} 
                colorBorder={'#02F5E6'}
                colorText={'#000000'}
            />
        </DefaultContainer>
    );

}

const style = StyleSheet.create({
    container: {
        paddingLeft: 30, 
        paddingRight: 30
    },
    title: {
       fontSize: 20, 
       textAlign: 'justify'
    },
    input: {
       borderBottomWidth: 0.6, 
       fontSize: 17
    }
});
