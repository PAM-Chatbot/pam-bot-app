import React, { useEffect, useState }  from 'react';
import { Animated, Easing, Dimensions } from 'react-native';

export default function Page3({ route, navigation }) {

    const [ springValue, setStringValue ] = useState(new Animated.Value(0.01));
    const [ xValue, setXValue ] = useState(new Animated.Value(-40));
    const { height } = Dimensions.get('window');

    useEffect(() => {   
        Animated.timing(xValue, {
            toValue: height / 2.4, 
            duration: 1000, 
            easing: Easing.linear,  
            useNativeDriver: false,
            delay: 200
        }).start(() => {
            Animated.spring(springValue, {
                toValue: 1, 
                friction: 1,
                useNativeDriver: false,
                delay: 300
            }).start(() => navigation.navigate('Home', { screen: 'Chat', params: route.params }));
        });
    }, []);

    return (
        <Animated.View style={{ height: '100%', alignItems: 'center' }}>
            <Animated.Text style={{ top: xValue, fontSize: 40 }}>Bem vindo(a)!</Animated.Text>
            <Animated.Text style={{ top: xValue, transform: [{ scale: springValue }], fontSize: 20 }}>Sou a Pam</Animated.Text>
        </Animated.View>
    );

}
