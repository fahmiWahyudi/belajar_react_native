import Portofolio from '../portofolio'
import News from '../news'
import { createDrawerNavigator } from 'react-navigation-drawer'
import {
    createBottomTabNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation'
import React from "react"

const Drawer = createDrawerNavigator({
    Portofolio: Portofolio,
    News: News
    
})

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: { screen: Portofolio,  
                navigationOptions:{ 
                    tabBarLabel:'Profile',  
                    tabBarIcon: ({tintColor}) => (
                        <Icon
                            name="work"
                            color={tintColor}
                            size={24}
                        />
                    )  
                } 
            },
        Settings: { screen: News,  
                    navigationOptions:{ 
                        tabBarLabel:'News',   
                        tabBarIcon: ({tintColor}) => (
                            <Icon
                                name="email"
                                color={tintColor}
                                size={24}
                            />
                        )  
                    }
                },
    }
)

const TopTabNavigator = createMaterialTopTabNavigator(
    {
        Home: { screen: Portofolio },
        Settings: { screen: News },
    }
)

export default createAppContainer(TabNavigator)