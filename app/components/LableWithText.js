//import liraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// create a component
const LabelWithText = ({ children, fontType = 'Montserrat Regular', size = 12, textColor = 'black', containerStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text numberOfLines={1} style={[{ fontFamily: `${fontType}`, fontSize: size, color: `${textColor}` }]}>{children}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-start',//for auto adjust width of view as per text!!!
        margin: 5
    }
})
export default LabelWithText;
