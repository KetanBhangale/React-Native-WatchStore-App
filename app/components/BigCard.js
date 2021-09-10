//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import CustomTextView from './CustomTextView';
import LabelWithText from './LableWithText';

const { width } = Dimensions.get('window')

// create a component
const BigCard = () => {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <LabelWithText fontType='Montserrat Bold' size={24} textColor='#c85a54' containerStyle={styles.offerPercentage}>40% Off</LabelWithText>
                    <CustomTextView fontType='Montserrat Medium' size={18} style={styles.offerText}>Golden Watch with Great Discount</CustomTextView>
                    <LabelWithText fontType='Montserrat Bold' size={20} textColor='white' containerStyle={styles.getButton}>Get Now!!!</LabelWithText>
                </View>
                <View>
                    <Image style={styles.image} source={require('../../assets/images/offer.png')} />
                </View>
            </View>

        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffcdd2',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 130,
        height: 200,
        margin: 5,
    },
    offerPercentage: {
        color: '#c85a54',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    offerText: {
        width: width / 2,
        color: 'black',
        alignSelf: 'flex-start',
    },
    getButton: {
        color: '#c85a54',
        backgroundColor: '#c85a54',
        borderRadius: 20,
    }
});

//make this component available to the app
export default BigCard;
