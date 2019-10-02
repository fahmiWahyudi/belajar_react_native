import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { Drawer } from './src/Router/Router'
import { Component } from 'react';

const NavPage = createAppContainer(Drawer)

export default class App extends Component{
  render(){
    return(

        <NavPage style={style.container}/>

    )
  }
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5FCFF',
  }
});