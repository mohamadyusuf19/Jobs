import _ from 'lodash';
import React, { Component } from  'react';
import { AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';

const SLIDES_DATA = [
    { text: 'Welcome to AppsJob', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9f4' }
]

class WelcomeScreen extends Component {
    state = {
        token: null
    }

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token')

        if(token) {
            this.props.navigation.navigate('map')
            this.setState({ token })
        } else {
            this.setState({
                token: false
            })
        }
    }

    renderOnComplete = () => {
        this.props.navigation.navigate('auth')
    }

    render() {
        if(_.isNull(this.state.token)) {
            return <AppLoading/>
        }
        return (        
            <Slides data={SLIDES_DATA} onComplete={this.renderOnComplete} />
        )
    }
}

export default WelcomeScreen;