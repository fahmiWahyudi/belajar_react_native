import Home from './Home'
import List from './List'
import Portofolio from '../portofolio'
import { createDrawerNavigator } from 'react-navigation-drawer';

export const Drawer = createDrawerNavigator({
    Home: Home,
    List: List,
    Portofolio : Portofolio,
    
})