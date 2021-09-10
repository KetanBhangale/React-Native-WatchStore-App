//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BigCard from '../components/BigCard';
import CustomTextView from '../components/CustomTextView';
import LabelWithText from '../components/LableWithText';
import WatchItem from '../components/WatchItem';
import * as Constant from '../utils/Constants'

// create a component
class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CustomTextView size={24} fontType='Montserrat Bold' style={{ color: 'gray' }}>{Constant.dashBoardText}</CustomTextView>
                    <BigCard />
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <LabelWithText size={22} fontType='Montserrat Bold' textColor='black' containerStyle={styles.category}>All</LabelWithText>
                            <LabelWithText size={22} fontType='Montserrat Bold' textColor='black' containerStyle={styles.category}>Smart</LabelWithText>
                            <LabelWithText size={22} fontType='Montserrat Bold' textColor='black' containerStyle={styles.category}>Mechanical</LabelWithText>
                            <LabelWithText size={22} fontType='Montserrat Bold' textColor='black' containerStyle={styles.category}>Automation</LabelWithText>
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <WatchItem />
                        <WatchItem />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <WatchItem />
                        <WatchItem />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    category: {
        backgroundColor: '#ffcdd2'
    }
});

//make this component available to the app
export default Dashboard;
