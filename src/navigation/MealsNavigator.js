import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MainScreen from "../screens/MainScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import DetailScreen from "../screens/DetailScreen";
import SplashScreen from "../screens/SplashScreen";
import ColorConst from '../constants/ColorConst';
import FavouriteScreen from '../screens/FavouriteScreen';
import {Icon} from "native-base";
import FilterScreen from '../screens/FilterScreen';



const AppInfoNavigator = createStackNavigator({
    Splash: {
        screen:SplashScreen,
        navigationOptions: {
            headerShown: false,
          },
    },
},{
    initialRouteName: 'Splash'
})

const FilterStack = createStackNavigator({
    screen:FilterScreen
})


const MealNavigator = createStackNavigator({
    Main:{
        screen: MainScreen,
        },
    Category: {
        screen: CategoryMealScreen,
    },
    Detail: DetailScreen
}, {
    // defaultNavigationOptions:{
    //     headerStyle:{
    //         backgroundColor: ColorConst.theme_primary,
    //     },
    //     headerTintColor: '#fff'
    // }
});
const FavNavigator = createStackNavigator({
    Fav:{
        screen: FavouriteScreen,
        },
    Detail: DetailScreen
}, {
    // defaultNavigationOptions:{
    //     headerStyle:{
    //         backgroundColor: ColorConst.theme_primary,
    //     },
    //     headerTintColor: '#fff'
    // }
});


const MealsTabNavigator = createBottomTabNavigator({
    Category:{
        screen:MealNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Icon type="Ionicons" name="restaurant" size={23} color={tabInfo.tintColor} />
            }
        }
    },
    Favourites:{
        screen:FavNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Icon type="Ionicons" name="star" size={23} color={tabInfo.tintColor} />
            }
        }
    },
},
{
    tabBarOptions:{
        activeTintColor:ColorConst.theme_primary,
        inactiveTintColor: 'grey',
    }
});


const DrawerNavigation = createDrawerNavigator({
    MealsTab:  {
        screen: MealsTabNavigator,
    },
    Filter:{
        screen:FilterStack
    }
})


const AppNavigator = createSwitchNavigator({
    App: AppInfoNavigator,
    Meal: DrawerNavigation
},
{
    initialRouteName: 'App'
})



export default createAppContainer(AppNavigator);