import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import AddCart from './components/AddCart';
import OnlineShopping from './components/OnlineShopping';
import PaymentSucessful from './components/PaymentSucessful';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <AddCart />
        {/* <OnlineShopping /> */}
        {/* <PaymentSucessful /> */}

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default App;