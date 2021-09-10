//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import CustomTextView from './CustomTextView';

const { width } = Dimensions.get('window')

// create a component
const WatchItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={require('../../assets/images/offer.png')} />
                <Image style={styles.fav} source={require('../../assets/images/fav.png')} />
            </View>

            <CustomTextView fontType='Montserrat Regular' size={16} style={styles.text}>Golden Watch with Great Discount</CustomTextView>
            <View style={{ flexDirection: 'row' }}>
                <CustomTextView fontType='Montserrat Medium' size={20} style={styles.textDiscount}>$90</CustomTextView>
                <CustomTextView fontType='Montserrat Medium' size={20} style={styles.textMrp}>$120</CustomTextView>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        backgroundColor: 'white',
        margin: 5,
        alignSelf: 'flex-start',
        padding: 5
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row'
    },
    image: {
        width: '80%',
        height: 200,
        margin: 5


    },
    fav: {
        width: 30,
        height: 30,

        marginRight: 0,
    },
    text: {
        width: '100%',
        color: 'black',
        alignSelf: 'flex-start',
    },
    textDiscount: {
        color: '#c85a54',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        marginRight: 20,
    },
    textMrp: {
        color: '#AAAAAA',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',

    },

});

//make this component available to the app
export default WatchItem;
