import React, { useState, useEffect } from 'react';
import { View, ImageBackground, SectionList, Text, TextInput, StyleSheet, Share, Clipboard, ToastAndroid, AppState } from 'react-native';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { useTheme } from '@react-navigation/native';
import { ItemClient, ItemServer, TitleSection, HeaderChat, Overlay, MenuItem } from '../../../../components';
import { IP_SERVER } from '../../../../../config';

function Chat({ navigation, route, user, dispatch }) {

    const [ socket, setSocket ] = useState(io(IP_SERVER, {      
      transports: ['websocket'], jsonp: false, autoConnect: false, reconnectionDelay: 1000 }));
    const [ textMessage, setTextMessage ] = useState('');
    const [ onUser, setOnUser ] = useState(false);
    const [ modal, setModal ] = useState({ visible: false, message: '' });
    const { colors } = useTheme();
    const [ list, setList ] = useState(undefined);

    function showItems({ item }) {
        if (item.origin == "client") 
            return <ItemClient onOptions={setModal} origin={item.origin} text={item.message} hour={item.hour} />; 
        else 
            return <ItemServer onOptions={setModal} origin={item.origin} text={item.message} hour={item.hour} />; 
    }

    useEffect(() => {
        
        socket.connect();
        socket.on('connect', () => setOnUser(true));
        socket.on('disconnect', () => setOnUser(false));
        socket.on("NEW_MESSAGE_SERVER", data => dispatch(data));

        if (user.messages.length === 0) {
            socket.emit("INIT_APP", route.params);
            dispatch({ type: "INIT_CHAT" });
        }

    }, []);

    useEffect(() => {

        AppState.addEventListener('change', (state) => {
            if (state === 'background')
                socket.emit("UPDATE_USER", user);
        });
        
        return () => AppState.removeEventListener('change', () => console.log('remove Listener'));

    }, []);
    
    function copyText() {
        Clipboard.setString(modal.message);
        ToastAndroid.showWithGravity("Copiado com sucesso!", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        setModal({ visible: false, message: '' });
    }

    async function shareText() {
        await Share.share({ message: modal.message });
        setModal({ visible: false, message: '' });
    }

    function forward () {
        setTextMessage(modal.message);
        setModal({ visible: false, message: '' });
    }

    function sendMessage(message) {
        if (message != "" && onUser) {
            dispatch({ type: "NEW_MESSAGE", originMessage: 'client', textMessage: message, connectionSocket: socket }); 
            setTextMessage(""); 
        }
    }

    function scrollToFinalList() {
      if(user.messages.length > 0 && list) {
         list.scrollToLocation({ animated: false, itemIndex: user.messages[user.messages.length - 1].data.length - 1, 
          sectionIndex: user.messages.length - 1, viewPosition: 0 });
      }
  }

    return (
      <View style={styles.container}>
          <Overlay open={modal.visible} onClose={setModal}>
                <MenuItem 
                    iconName={"content-copy"} iconColor={'#5c5c8a'} iconSize={30} 
                    label={'Copiar'} style={styles.modalTitleOptions}
                    pressColor={'#C7C7C7'} onPress={copyText} borderTopWidth={0.2} 
                />
                <MenuItem 
                    iconName={"arrow-forward"} iconColor={'#5c5c8a'} iconSize={30} 
                    label={'Reencaminhar'} style={styles.modalTitleOptions}
                    pressColor={'#C7C7C7'} onPress={forward} borderTopWidth={0.2} 
                />
                <MenuItem 
                    iconName={"share"} iconColor={'#5c5c8a'} iconSize={30} 
                    label={'Compartilhar'} style={styles.modalTitleOptions}
                    pressColor={'#C7C7C7'} onPress={shareText} borderTopWidth={0.2} 
                />
          </Overlay>
          <HeaderChat 
              title={"Pam"} 
              colors={colors}
              icon={user.icon}
              connected={onUser}
              onDrawerPress={navigation.openDrawer} 
          />
          <ImageBackground source={{ uri: user.backgroundChat }} style={styles.chatBackground}>
              <SectionList
                  ref={ref => setList(ref)}
                  stickySectionHeadersEnabled={true}
                  onContentSizeChange={scrollToFinalList}
                  sections={user.messages}
                  onLayout={scrollToFinalList}
                  onScrollToIndexFailed={event => console.log('Olá')}
                  keyExtractor={(item, index) => item + index}
                  renderItem={showItems}
                  renderSectionHeader={({ section: { date } }) => <TitleSection title={date} />}
                  ListEmptyComponent={<Text style={{ ...styles.textEmpty, color: colors.primary }}>Conectando...</Text>}
                  contentContainerStyle={styles.contentList}
                  extraData={user.messages}
              />
              <View style={styles.containerInput}>
                  <TextInput
                      placeholderTextColor={'#B7B6B6'}
                      placeholder={"Escreva sua Mensagem..."}
                      style={{ ...styles.input, borderColor: colors.primary, color: colors.primary }}
                      value={textMessage}
                      dataDetectorTypes={'all'}
                      multiline={true}
                      onChangeText={text => setTextMessage(text)}
                  />
                  <MenuItem 
                    iconName={"send"} iconColor={"green"} iconSize={35} 
                    style={styles.buttonSend} pressColor={'#C7C7C7'} 
                    onPress={() => sendMessage(textMessage)} borderRadius={30} 
                  />
              </View>
          </ImageBackground>
      </View>  
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    chatBackground: {
      flex: 1,
      resizeMode: "cover"
    },
    contentList: {
      paddingLeft: 5, 
      paddingRight: 6  
    },
    containerInput: {
      flexDirection: 'row', 
      alignItems: 'flex-end', 
      padding: 10
    },
    modalTitle: { 
      marginLeft: 15, 
      marginTop: 20, 
      marginBottom: 10,
      fontSize: 20
    },
    modalTitleOptions: {
      fontSize: 18,
      color: '#000000',
      padding: 10,
      borderColor: '#C7C7C7'
    },
    textEmpty: { 
      textAlign: 'center', 
      marginTop: 20 
    },
    input: { 
      borderRadius: 10,
      flex: 1,
      borderWidth: 0.5,
      maxHeight: 200,
      marginRight: 10,
      paddingLeft: 12,
      paddingRight: 12
    },
    buttonSend: {  
      paddingTop: 12, 
      paddingBottom: 12
    }
});

export default connect(state => ({ user: state.User }))(Chat);