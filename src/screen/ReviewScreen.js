import React, { Component } from  'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

class ReviewScreen extends Component {    
    render() {
        return (
            <View>
                <Header
                    headerText="Review Jobs"
                    title="Setting"
                    onPress={() => this.props.navigation.navigate('setting')}
                />
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        )
    }
}

export default ReviewScreen;