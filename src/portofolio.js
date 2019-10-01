/*
  * portofolio
*/
import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Button, Icon, ListItem, Left, Body } from 'react-native-elements';

export default class Portofolio extends Component{
  render(){
      return(
          <View style={{ backgroundColor:'#ebebeb' }}>
              <Button 
                  icon={
                  <Icon name="" size={30} color="red" />
                  } title="Portofolio"/>
              <Image style={{width: 200, height: 200, alignSelf:"center", marginTop:10, borderRadius:60, marginBottom:10}}
              source={{uri:'https://media.licdn.com/dms/image/C5103AQG_arDSi0zJPg/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=0jBNkPgEoZnoQBXAMj-Ipadsgb8jMTL8DxXkLFg89cM'}}/>
              <Text style={{ alignSelf:"center", fontSize:25, fontWeight:'bold'}}>Fahmi Wahyudi {'\n'}</Text>
              <Button 
                  icon={
                  <Icon name="phone" size={35} />
                  } 
                  type="clear"
                  title="  +62838 - 7240 - 1444"
                  buttonStyle={{ justifyContent: 'flex-start' }}/>
              <Button 
                  icon={
                  <Icon name="email" size={35} />
                  } 
                  type="clear"
                  title="  fahmi.wahyudi@pegadaian.co.id"
                  buttonStyle={{ justifyContent: 'flex-start' }}/>
              <Button 
                  icon={
                  <Icon name="room" size={35} />
                  } 
                  type="clear"
                  title="  Kampung Baru, Pondok Cabe Udik"
                  buttonStyle={{ justifyContent: 'flex-start' }}/>
              <Button 
                  icon={
                  <Icon name="work" size={35} />
                  } 
                  type="clear"
                  title="  PT. Pegadaian"
                  buttonStyle={{ justifyContent: 'flex-start' }}/>
              <Button 
                  icon={
                  <Icon name="school" size={35} />
                  } 
                  type="clear"
                  title="  STTI NIIT I-Tech"
                  buttonStyle={{ justifyContent: 'flex-start' }}/>
              <Button 
                  icon={
                  <Icon name="info" size={35} />
                  } 
                  type="clear"
                  title=" Programmer"
                  buttonStyle={{ justifyContent: 'flex-start' }}/>
          </View>
          
      )
  }
}