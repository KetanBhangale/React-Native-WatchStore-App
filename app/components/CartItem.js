//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import CustomTextView from './CustomTextView';

const { width } = Dimensions.get('window')

// create a component
const CartItem = () => {
    return (
        <View style={styles.container}>
            <View>
                <CustomTextView fontType='Montserrat Regular' size={16} style={styles.title}>Golden Watch with Great Discount</CustomTextView>
                <CustomTextView fontType='Montserrat Bold' size={16} style={styles.text}>Qty: 4</CustomTextView>
                <View style={{ flexDirection: 'row' }}>
                    <CustomTextView fontType='Montserrat Medium' size={18} style={styles.textDiscount}>$90</CustomTextView>
                    <CustomTextView fontType='Montserrat Medium' size={18} style={styles.textMrp}>$120</CustomTextView>
                </View>
            </View>
            <Image style={styles.image} source={require('../../assets/images/offer.png')} />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: width - 20,
        backgroundColor: '#ffcdd2',
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    image: {
        width: 50,
        height: 80,
        marginRight: 5,
    },

    title: {
        width: 300,
        color: 'black',
        alignSelf: 'flex-start',
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
export default CartItem;
