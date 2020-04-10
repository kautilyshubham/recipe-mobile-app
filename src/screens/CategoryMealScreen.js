import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/categories';
import { MEALS } from "../data/meal";
import { FlatList } from 'react-native-gesture-handler';
import MealCard from '../components/MealCard';

const CategoryMealScreen = (props) =>{
    const catId = props.navigation.getParam('catId');
    const selectedMeals  = MEALS.filter(meal=> meal.categoryIds.findIndex(id=> id === catId) !== -1);
    return(
        <View style={styles.screen}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={selectedMeals}
        keyExtractor ={item=>item.id}
        style={{width:'100%', paddingHorizontal:15}}
        renderItem={(mealItem)=>{
            return(
                <MealCard 
                img={mealItem.item.imageUrl}
                title={mealItem.item.title}
                affordable= {mealItem.item.affordability}
                duration = {mealItem.item.duration}
                complex = {mealItem.item.complexity}
                onPress= {()=>props.navigation.navigate({routeName: 'Detail', params:{itemId:mealItem.item.id }})}
                />
            )
        }}
        />
        </View>
    )
}

CategoryMealScreen.navigationOptions = (navigationData) => {
    console.log(navigationData);
    const catId = navigationData.navigation.getParam('catId');
    const selectedCategory  = CATEGORIES.find(cat=> cat.id === catId)
    return{
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    alignItems:'center',
},
})

export default CategoryMealScreen;