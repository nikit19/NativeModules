/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ToastAndroid} from 'react-native';
import SharedPref from './SharedPref';

SharedPref.initialse("test","Hello")
SharedPref.getString("test")
          .then((result) => ToastAndroid.show(result,ToastAndroid.LONG)
 )
AppRegistry.registerComponent(appName, () => App);

