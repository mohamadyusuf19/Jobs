import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { Button } from 'react-native-elements';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={props.onPressBack}>
                <Image source={props.source} style={styles.back} />
            </TouchableOpacity>            
            <Text style={styles.text}>{props.headerText}</Text>                
            <Button 
                title={props.title} 
                onPress={props.onPress}
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0, 122, 255, 1)"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginTop: Platform.OS === 'android' ? 24:0
    },
    text: {
        color: '#000',
        fontSize: 16
    },
    back: {
        height: 22,
        width: 22
    }
})

export default Header