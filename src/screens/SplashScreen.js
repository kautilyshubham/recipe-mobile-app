import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import ColorConst from '../constants/ColorConst';
import GlobalStyles from '../constants/GlobalStyles';
import { Icon } from 'native-base';

class SplashScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={{flex:1, backgroundColor:ColorConst.theme_secondary,alignItems:'center', paddingVertical:45, paddingHorizontal:25 }}>
            <Icon type="MaterialIcons" name="" />
                <View style={{flex:1, alignItems:'center'}}>
                    <Icon type="MaterialIcons" name="" style={{fontSize:150, color:"#fff", marginBottom: 30,}}>donut_small</Icon>
                    <Text style={styles.text_big} >Welcome to Recipe</Text>
                    <Text style={styles.text_min}>where we curv you best recipes of the world...</Text>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate({routeName:'Main',params:{name:'shubham'}})} style={[GlobalStyles.button_w, GlobalStyles.shadow]}>
                    <Text style={GlobalStyles.btn_w_text}>Get's Started</Text>
                </TouchableOpacity>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    text_big:{
        fontSize:30,
        color: '#fff',
        fontWeight:'bold',
        marginBottom:10
    },
    text_min:{
        fontSize:18,
        color: '#fff',
        textAlign:'center'
    },
})
export default SplashScreen;