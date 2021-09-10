//import liraries
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// create a component
const ItemQtyView = ({
    fontType = 'montserrat_regular',
    size = 12, textColor = 'black',
    containerStyle
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text numberOfLines={1} style={[{ fontFamily: `${fontType}`, fontSize: size, color: `${textColor}` }]}>+</Text>
            <Text numberOfLines={1} style={[{ fontFamily: `${fontType}`, fontSize: size, color: `${textColor}` }]}>6</Text>
            <Text numberOfLines={1} style={[{ fontFamily: `${fontType}`, fontSize: size, color: `${textColor}` }]}>-</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
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
export default ItemQtyView;
