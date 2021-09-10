//import liraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// create a component
const CustomTextView = ({ children, fontType = 'Montserrat Regular', size = 12, maxLines = 2, style }) => {
    return (

        <Text numberOfLines={maxLines} style={[styles.text, { fontFamily: `${fontType}`, fontSize: size }, style]}>{children}</Text>

    );
};

const styles = StyleSheet.create({
    text: {

        borderRadius: 10,
        alignSelf: 'flex-start',//for auto adjust width of view as per text!!!
        margin: 5
    }
})
export default CustomTextView;
