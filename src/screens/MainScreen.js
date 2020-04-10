import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import {CATEGORIES} from "../data/categories";
import CategoryCard from '../components/CategoryCard';
import ColorConst from '../constants/ColorConst';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';


const MainScreen = (props) =>{
    console.log(props,'')
    return(
        <View style={styles.screen}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                <Text>Open drawer</Text>
            </TouchableOpacity>
            <FlatList
                style={{flex:1,width:'100%'}}
                data={CATEGORIES}
                numColumns={2}
                renderItem={(itemData)=>{
                    return (
                    <CategoryCard 
                    onPress={()=>props.navigation.navigate({routeName:'Category', params:{catId:itemData.item.id}})}
                    title={itemData.item.title} 
                    id={itemData.item.id} 
                    color={itemData.item.color} />)
                }}
             />
           
        </View>

    )
}

MainScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    // headerStyle:{
    //     alignSelf:'center',
    //     backgroundColor: ColorConst.theme_primary,
    // },
    // headerTintColor:"#fff"
    headerLeft:<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
        title="Drawer"
        type={'SimpleLineIcons'}
        iconName="flip"
        onPress={()=>props.navigation.openDrawer()}
        />
    </HeaderButtons>
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
}
})

export default MainScreen;