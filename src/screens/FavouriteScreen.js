import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import {MEALS} from '../data/meal';
import MealCard from '../components/MealCard';
const FavouriteScreen = (props) =>{
    const favMeal = MEALS.filter(meal=> meal.id=== 'm1' || meal.id === 'm2')
    return(
      <ScrollView>
          {favMeal.map(meal=>{
             return<MealCard
             key={meal.id}
              img={meal.imageUrl}
              affordable={meal.affordability}
              duration={meal.duration}
              title={meal.title}
              complex={meal.complexity}
              onPress={()=>props.navigation.navigate({routeName: 'Detail', params:{itemId:meal.id }})}
              />
          })}

      </ScrollView>
    )
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})

export default FavouriteScreen;