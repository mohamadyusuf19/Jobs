import React,{ Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component {
    renderLastSildes(index) {
        if(index === this.props.data.length-1){
            return (
                <Button
                    title="Onwards!!!"
                    raised
                    buttonStyle={styles.button}
                    onPress={this.props.onComplete}
                />
            )
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View key={slide.text} style={[styles.slides, { backgroundColor: slide.color }]} >
                    <Text style={styles.textSlides}>{slide.text}</Text>
                    {this.renderLastSildes(index)}
                </View>
            )
        })
    }

    render() {
        return (
            <ScrollView
                horizontal
                style={{ flex: 1 }}
                pagingEnabled 
            >
                {this.renderSlides()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    slides: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        padding: 8        
    },
    textSlides: {
        fontSize: 30,
        color: '#fff'
    },
    button: {
        backgroundColor: '#0288D1'
    }
})

export default Slides;