import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FilterScreen = () =>{
    return(
        <View style={styles.screen}>
            <Text>This is Filter meal screen!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})

export default FilterScreen;