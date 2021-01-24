
class UserController {

    createObjectMessage(originMessage, textMessage) {

        const monthName = [" de Janeiro de ", " de Fevereiro de ", " de Março de ", " de Abril de ", " de Maio de ", 
        " de Junho de ", " de Julho de ", " de Agosto de ", " de Setembro de ", " de Outubro de ", " de Novembro de ", 
        " de Dezembro de "];
    
        var dateNow = new Date().getDate() + monthName[new Date().getMonth()] + new Date().getFullYear();
    
        var newMessage = { 
            origin: originMessage, 
            message: textMessage, 
            hour: String(new Date().getHours()).padStart(2, '0') + ":" + String(new Date().getMinutes()).padStart(2, '0') 
        };
        
        return { dateNow, newMessage };
    
    }

    initApp(state, action) {
        
        var messageObject = (action.messages.originMessage != undefined ? this.createObjectMessage(action.messages.originMessage, action.messages.textMessage) : action.messages);
        var messages = (messageObject.dateNow != undefined ? [ { date: messageObject.dateNow, data: [ messageObject.newMessage ] } ] : messageObject );
        return { ...state, _id: action._id, email: action.email, telephone: action.telephone, messages: messages };
    
    }

    sendMessage(state, action) {

        var messageObject = this.createObjectMessage(action.originMessage, action.textMessage);
        if (state.messages.length == 0 || state.messages[state.messages.length - 1].date !== messageObject.dateNow) {
            if (action.originMessage == "client")
                action.connectionSocket.emit("NEW_MESSAGE_CLIENT", messageObject.newMessage);
            return { ...state, messages: [ ...state.messages, { date: messageObject.dateNow, data: [ messageObject.newMessage ] } ] };
        }
        else if (state.messages[state.messages.length - 1].date === messageObject.dateNow) {
            state.messages[state.messages.length - 1].data.push(messageObject.newMessage);
            if (action.originMessage == "client")
                action.connectionSocket.emit("NEW_MESSAGE_CLIENT", messageObject.newMessage);
            return { ...state, messages: [ ...state.messages ] };
        }
        
    }

}

module.exports = new UserController();