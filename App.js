import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import store from './src/store'

import AuthScreen from './src/screen/AuthScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';
import MapScreen from './src/screen/MapScreen';
import DeckScreen from './src/screen/DeckScreen';
import ReviewScreen from './src/screen/ReviewScreen';
import SettingScreen from './src/screen/SettingScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: createStackNavigator({
              review: { 
                screen: ReviewScreen,
                navigationOptions: {
                  header: null
                } 
              },
              setting: { 
                screen: SettingScreen,
                navigationOptions: {
                  header: null
                }  
              }
            })
          }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false 
      },
      lazyLoad: true
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator/> 
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },
});
