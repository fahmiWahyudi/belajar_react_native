import{
    createSwitchNavigator    
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from "react"

import Introduction from '../Introduction'
import Home from '../NestedHome'
import HomeChild from '../NestedHomeChild'
import Kategori from '../NestedKategori'
import KategoriChild from '../NestedKategoriChild'
import Akun from '../NestedAkun'
import AkunChild from '../NestedAkunChild'

const HomePage = createStackNavigator({
    Home : Home,
    Home1 : HomeChild
})

const KategoriPage = createStackNavigator({
    Kategori : Kategori,
    Kategori1 : KategoriChild
})

const AkunPage = createStackNavigator({
    Akun : Akun,
    Akun1 : AkunChild
})

const BottomNavigation = createBottomTabNavigator(
    {
        Home : { 
                screen: HomePage,
                navigationOptions: {
                    tabBarIcon: ({tintColor}) =>
                      <Icon name="home" size={20} color={tintColor} />
                  }
            },
        Kategori : { 
            screen: KategoriPage,
            navigationOptions: {
                tabBarIcon: ({tintColor}) =>
                  <Icon name="table" size={20} color={tintColor} />
              }
        },
        Akun : { 
            screen: AkunPage,
            navigationOptions: {
                tabBarIcon: ({tintColor}) =>
                  <Icon name="user" size={20} color={tintColor} />
              }
        }
    },
    {
        initialRouteName: "Home",
        tabBarOptions: {
          activeTintColor: '#5bb7f5',
          labelStyle: {
            fontSize: 14
          },
          style: {
            backgroundColor: '#fff',
            // height: 0
          }
        },
    }
)

export const AppNavigation = createSwitchNavigator({
    Introduction : Introduction,
    Home : BottomNavigation
})

HomePage.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
  
    return {
      tabBarVisible
    };
};

KategoriPage.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
  
    return {
      tabBarVisible
    };
};

AkunPage.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
  
    return {
      tabBarVisible
    };
};