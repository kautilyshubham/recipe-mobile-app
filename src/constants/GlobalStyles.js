import { StyleSheet } from "react-native"
import ColorConst from "./ColorConst";
import FontConst from "./FontConst";

export default styles = StyleSheet.create({
    button_w:{
         width:'100%',
         padding:15,
         borderRadius:35,
         backgroundColor:'#fff',
         alignItems:'center',
    },
    btn_w_text:{
        fontSize:16,
        color: ColorConst.theme_primary,
        fontWeight:'bold'
    },
    button_r:{
         width:'100%',
         padding:15,
         borderRadius:35,
         backgroundColor:ColorConst.theme_primary,
         alignItems:'center',
    },
    btn_r_text:{
        fontSize:16,
        color: '#fff',
        fontWeight:'bold'
    },
    shadow:{
        shadowColor:'#ddd',
        shadowOpacity:1,
        shadowOffset:{width:0, height:2},
        elevation:10,
        shadowRadius:10,
    },
})