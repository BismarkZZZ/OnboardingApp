import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'



export default function AddCart({navigation}) {
  return (

    <View style={styles.container}>

      <View style={styles.textContainer}>

        <Text style={styles.textHeader}>ADD TO CART</Text>

        <Text style={styles.textDetail}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</Text>

      </View>

      <Image
        style={styles.image}
        source={require('../../assets/cart.png')}
      />

      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('Payment Sucessful')
      }}
      style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.lowDetails}>
        <TouchableOpacity style={styles.Button} onPress={()=>{
            navigation.navigate('Online Shopping')
          }}>
          <Text style={styles.previous}>Previous</Text>
        </TouchableOpacity>

        <View style={styles.illust}>

          <View style={styles.illustRound}></View><View />
          <View style={styles.illustRec}></View><View />
          <View style={styles.illustRound}></View><View />

        </View>

        <TouchableOpacity style={styles.Button} 
        onPress={()=>{
            navigation.navigate('Payment Sucessful')
          }}>
          <Text
          style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>


  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
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
    height: 400,
    width: 380
  },
  Button: {
    height: 60,
    width: 60,
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor: '#7649aa',
    height: 50,
    width: 150,
    borderRadius: 30,
    marginTop: 40,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  lowDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
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
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  illustRound: {
    borderRadius: 70,
    backgroundColor: '#afafaf',
    height: 8,
    width: 8,
    marginRight: 3
  },
  illustRec: {
    backgroundColor: '#7649aa',
    height: 8,
    width: 20,
    marginHorizontal: 5,
    borderRadius: 5
  },
  bottomContainer: {
    marginTop: 20
  }
});
