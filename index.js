/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Login from './src/pages/login'

AppRegistry.registerComponent(appName, () => Login);
