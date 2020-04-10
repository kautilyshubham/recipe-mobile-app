/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import MealsNavigator from './src/navigation/MealsNavigator';

const App = (props) => {
  return (
    <>
      {/* <StatusBar backgroundColor={ColorConst.theme_primary} barStyle="light-content"  /> */}
      <MealsNavigator {...props} />
    </>
  );
};

export default App;
