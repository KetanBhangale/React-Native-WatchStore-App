//import liraries
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// create a component
const ImageButton = ({ children,
    fontType = 'montserrat_regular',
    size = 12, textColor = 'black',
    imageUrl = '../../assets/images/cart.png',
    containerStyle
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Image style={styles.cart} source={require('../../assets/images/cart.png')} />
            <Text numberOfLines={1} style={[{ fontFamily: `${fontType}`, fontSize: size, color: `${textColor}` }]}>{children}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',//for auto adjust width of view as per text!!!
        margin: 5
    },
    cart: {
        width: 36,
        height: 36,
        margin: 5,
    },
})
export default ImageButton;
