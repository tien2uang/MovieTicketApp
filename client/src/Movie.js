import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Movie() {
  return (
    <View style={styles.a}>
        <View style={[styles.header, styles.container]}>
          <View style = {{flexDirection: 'row', gap: 10}}> 
                <Icon name= 'arrow-left' style={{fontSize: 18, color: '#FFFFFF', marginTop: 10}}/>
                 <Text style= {styles.text}> movie detail</Text>
          </View>

        </View>
         <View style={[styles.main, styles.container]}>
             <View style={styles.left}>
             <Image source={require('./asset/image/poster.png')} style={styles.poster} />
             </View>
             <View style={styles.right} >
                <View style = {styles.box} >
                      <Text style={styles.text_box}> <Icon name= 'th-large' style={{fontSize : 20, color: '#FFFFFF'}}/> </Text>
                      <Text style={{fontSize: 12}}> Category </Text>
                      <Text style={styles.text_box}> +13 </Text>
                </View>
                <View style = {styles.box} >
                      <Text style={styles.text_box}> <Icon name= 'clock-o' style={{fontSize : 20, color: '#FFFFFF'}}/> </Text>
                      <Text style={{fontSize: 12}}> Duration </Text>
                      <Text style={styles.text_box}> 2h 37m </Text>
                </View>
                <View style = {styles.box} >
                      <Text style={styles.text_box}> <Icon name= 'star' style={{fontSize : 20, color: '#FFFFFF'}}/> </Text>
                      <Text style={{fontSize: 12}}> Rating </Text>
                      <Text style={styles.text_box}> 8/10 </Text>
                </View>
             </View>
        </View>
        <View style = {styles.container}>
              <Text style={styles.text}> eternals</Text>
             <View style= {styles.rectangle}></View>
        </View>
        <View style={[styles.container, styles.synosis]}>
             <Text style={styles.text}> synopsis </Text>
             <Text style={styles.content}>
             The fate of humanity lies in their hands. Marvel Studios? Eternals? welcomes an exciting new team of
             Super Heroes to the Marvel Cinematic Universe. The epic story, spanning thousands of years, features
             a group of immortal heroes forced out of the shadows to reunite against mankind?s oldest enemy, The Deviants.
             </Text>
        </View>
        <View style={[styles.act, styles.container]}>
          <TouchableOpacity style={styles.button}>
          <Text style={{color: '#181818'}}>  Watch Trailer </Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button}>
          <Text style={{color: '#181818'}}>  Get Ticket </Text>
           </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  a: {
    flex: 1,
    backgroundColor: '#181818',
    marginTop: 0,
    flexDirection: 'column',
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  
  header: {
    flex: 0.2,
    justifyContent: 'center',

  },
  text: {
    font: 'Poppins',
    fontSize: 16,
    fontWeight: 500, 
    marginTop: 10,
    textTransform: 'uppercase',
    color: '#FFFFFF'
  },
  main: {
    top: 10,
    width: '100%',
    height: 340,
    flexDirection: 'row',
  },
  left: {
    flex: 0.6667,
  },
  poster: {
    flex: 0.6667,
    width: 210,
    height: 310.33,
    position: 'absolute',
    borderRadius: 20,
  },
  right: {
    flex: 0.3333,
    flexDirection: 'column',
    gap: 35,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#181818',
    borderRadius : 16,
    borderColor: '#B0BEC5',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text_box: {
    color: '#FFFFFF',
    margin: 5,
    fontSize: 14,
  },
  rectangle: {
    width: '100%',
    backgroundColor: '#B0BEC5',
    marginTop: 10,
    height: 2,
  },
  synosis: {
    flex: 0.3,
  },
  content: {
    font: 'Poppins',
    fontSize: 14.5,
    fontWeight: 400, 
    marginTop: 40,
    position: 'absolute',
    width: '100%',
    textAlign : 'justify',
    color: '#FFFFFF',
  },
  act: {
    top: 110,
    alignItems: 'center',
    gap: 10,
  },
  button: {
    height : 32,
    width: 132,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

});
