import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';

const CategoryCard  = (props)=>{
    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.card,GlobalStyles.shadow ]}>
        <View style={[styles.image,{backgroundColor: props.color},{width:'100%'}]}>
            <View style={{padding:10}}>
            <Text style={styles.id}>{props.id}</Text>
            <Text style={styles.name} numberOfLines={2}>{props.title}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:10,
        backgroundColor:'#fff',
        margin:10,
        flex:1
    },
    image:{
        width:'100%',
        height:140,
        borderRadius:10, 
    },
    name:{
        fontSize:23,
        fontWeight:'bold',
        color:'#fff',
    },
    id:{
        fontWeight:'bold',
        color:'#000',
        marginBottom:30

    }
})

export default CategoryCard;