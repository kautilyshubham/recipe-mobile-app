import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import ColorConst from '../constants/ColorConst';
import GlobalStyles from '../constants/GlobalStyles';
import { MEALS } from '../data/meal';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';

const DetailScreen = (props) =>{
    const itemId = props.navigation.getParam('itemId');
    const selectedMeal  = MEALS.find(meal=> meal.id === itemId)
    return(
        <ScrollView contentContainerStyle={styles.screen}>
           <ImageBackground source={{uri: selectedMeal.imageUrl}} style={{width:'100%', height:220}} />
           <View style={{flex:1,marginVertical:15}}>
            <Text style={styles.aff} >{selectedMeal.affordability}</Text>
            <Text style={styles.name} numberOfLines={2}>{selectedMeal.title}</Text>
            <Text style={styles.heading}>Ingredients:</Text>
            <Text style={styles.para}>{selectedMeal.ingredients}</Text>
            <Text style={styles.heading}>Steps:</Text>
            <Text style={styles.para}>{selectedMeal.steps}</Text>
            <Text style={styles.dur}>{selectedMeal.duration} Minutes</Text>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}  
            style={[GlobalStyles.button_r, GlobalStyles.shadow,{width:'100%', marginTop:35}]}>
                <Text style={GlobalStyles.btn_r_text}>Go back</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

DetailScreen.navigationOptions = (navigationData) => {
    console.log(navigationData);
    const itemId = navigationData.navigation.getParam('itemId');
    const selectedMeal  = MEALS.find(item=> item.id === itemId)
    return{
        headerTitle: selectedMeal.title,
        headerRight: ()=> (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title="Favourite"
            type={'SimpleLineIcons'}
            iconName="star"
            onPress={()=>console.log("mark as favourite!!")}
             />
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
screen:{
    flexGrow:1,
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:25
},
aff:{
    color:'#fff',
    alignSelf:'flex-start',
    fontSize:14,
    marginBottom:10,
    backgroundColor: ColorConst.theme_secondary,
    padding:5,
    borderRadius:4,
},
header:{
    height:200,
    width:'100%',
    borderRadius:10,
},
name:{
    fontSize:22,
    color:'#454545',
    fontWeight:'bold',
    textAlign:'left',
    marginBottom:10
},
id:{
    color:'#999',
    fontSize:18,
    marginBottom:10

},
para:{
    fontSize:14,
    color:'#676767',
    marginBottom:15
},
heading:{
    fontSize:16,
    fontWeight:'bold',
    color: '#999',
    marginBottom:2
},
dur:{
    fontSize:18,
    fontWeight:'bold',
    color:'#555'
}
})

export default DetailScreen;