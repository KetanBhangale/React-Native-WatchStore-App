//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BigCard from './app/components/BigCard';
import CartItem from './app/components/CartItem';
import CustomTextView from './app/components/CustomTextView';
import ImageButton from './app/components/ImageButton';
import ItemQtyView from './app/components/ItemQtyView';
import LabelWithText from './app/components/LableWithText';
import WatchItem from './app/components/WatchItem';
import Dashboard from './app/screens/Dashboard';

// create a component
class App extends Component {
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          {/* <CustomTextView size={10} fontType='Montserrat Bold' style={styles.text}>Ketan Bhangale</CustomTextView> */}
          {/* <LabelWithText size={10} fontType={'montserrat_bolditalic'}>Ketan Bhangale da</LabelWithText> */}
          {/* <BigCard />
        <WatchItem /> */}
          {/* <ImageButton fontType='montserrat_bold' size={20} textColor='white' containerStyle={styles.getButton}>Add To Cart</ImageButton>
        <ItemQtyView fontType='montserrat_bold' size={30} textColor='white' containerStyle={styles.getButton}></ItemQtyView>
        <CartItem /> */}
          <Dashboard />
        </View >
      </>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  text: {
    color: 'red'
  },
  getButton: {
    color: '#c85a54',
    backgroundColor: '#c85a54',
    borderRadius: 20,
  }
});

//make this component available to the app
export default App;
