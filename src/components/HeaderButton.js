import React from 'react';
import {HeaderButton} from "react-navigation-header-buttons";
import {Icon} from "native-base";

import ColorConst from '../constants/ColorConst';

const CustomHeaderButton = (props)=>{
    return <HeaderButton  
            {...props} 
            IconComponent={Icon}
            iconSize={23}
            color={ColorConst.theme_primary}
     />

}

export default CustomHeaderButton;