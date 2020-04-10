import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import GlobalStyles from "../constants/GlobalStyles";
import ColorConst from '../constants/ColorConst';

const MealCard  = (props)=>{
    console.log(props);
    return(
        <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.card]}>
            <Image source={{uri: props.img}} style={{width:'100%', height:200}} />
            <View style={{padding:15}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:15}}>
            <Text style={styles.aff} >{props.affordable}</Text>
            <Text style={{fontWeight:'bold', color:'#999'}}>{props.duration} Minutes</Text>
            </View>
            <Text style={styles.name}>{props.title}</Text>
            <Text style={styles.para}>{props.complex}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
card:{
    width:'100%',
    borderRadius:10,
    backgroundColor:'#fff',
    marginVertical:10,
    marginHorizontal:25,
    alignSelf:'center',
    overflow:'hidden'
},
name:{
    fontSize:16,
    color:'#454545',
    fontWeight:'bold',
    textAlign:'left',
    marginBottom:10
},
aff:{
    color:'#fff',
    fontSize:14,
    backgroundColor: ColorConst.theme_secondary,
    padding:5,
    borderRadius:4

},
para:{
    fontSize:14,
    color:'#676767',
    marginBottom:10,
    textTransform:"uppercase"
    
}
});

export default MealCard;