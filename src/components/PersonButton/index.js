import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

interface PersonButtonProps { 
   text: String,
   press: Function, 
   colorBackground: String,
   activeColor: String, 
   colorBorder: String,
   colorText: String, 
   disabled: Boolean   
}

function PersonButton({ text, press, colorBackground, activeColor, colorBorder, colorText, disabled }: PersonButtonProps) {
   
   return (
      <TouchableHighlight disabled={disabled} underlayColor={activeColor} style={{ ...style.button, borderColor: colorBorder, backgroundColor: colorBackground }} onPress={press}>
           <Text style={{ fontSize: 16, color: colorText }}>{text}</Text>
      </TouchableHighlight>
   );

}

const style = StyleSheet.create({
   button: {
     alignItems: 'center', 
     padding: 20, 
     borderWidth: 3, 
     borderRadius: 20
   }
});

export default PersonButton;