import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


export default function AddCart() {
    return (

        <View style={styles.container}>

            <View style={styles.textContainer}>

                <Text style={styles.textHeader}>ADD TO CART</Text>

                <Text style={styles.textDetail}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</Text>

            </View>

            <Image
                style={styles.image}
                source={require('../assets/cart.png')}
            />

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <View style={styles.lowDetails}>
                <Text style={styles.previous}>Previous</Text>

                <View style={styles.illust}>

                    <View style={styles.illustRound}></View><View />
                    <View style={styles.illustRec}></View><View />
                    <View style={styles.illustRound}></View><View />

                </View>

                <Text style={styles.skip}>Skip</Text>
            </View>
            <StatusBar style="auto" />
        </View>


    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 60,
      marginHorizontal: 20
    },
    textContainer: {
      marginVertical: 15
    },
    textHeader: {
      fontSize: 23,
      fontWeight: 'bold',
      marginBottom: 15
    },
    textDetail: {
      fontSize: 15,
      color: '#878181'
    },
    image: {
      height: 250,
      width: 350
    },
    buttonContainer: {
      backgroundColor: '#7649aa',
      height: 50,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      marginTop: 40,
      left: 100,
      marginBottom: 50
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
    },
    lowDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    previous: {
      color: '#878181',
      fontSize: 15
    },
    skip: {
      color: '#878181',
      fontSize: 15,
      alignItems: 'flex-end'
    },
    illust: {
      flexDirection: 'row'
    },
    illustRound: {
      borderRadius: 70,
      backgroundColor: '#afafaf',
      height: 8,
      width: 8,
      marginRight: 5
    },
    illustRec: {
      backgroundColor: '#7649aa',
      height: 8,
      width: 20,
      marginHorizontal: 5,
      borderRadius: 5
    }
  });
  