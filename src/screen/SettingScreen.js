import React, { Component } from  'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

const backIcon = require('../assets/arrow.png')

class SettingScreen extends Component {
    render() {
        return (
            <View>
                 <Header
                    headerText="Settings"
                    source={backIcon}
                    onPressBack={() => this.props.navigation.goBack()}
                />
                <Text>SettingScreen</Text>
                <Text>SettingScreen</Text>
                <Text>SettingScreen</Text>
            </View>
        )
    }
}

export default SettingScreen;