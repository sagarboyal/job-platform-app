import axios from 'axios';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

// 1. Get the Metro packager IP address from Expo
const debuggerHost = Constants.expoConfig?.hostUri;

// 2. Extract just the IP part (e.g., "192.168.0.105" from "192.168.0.105:8081")
const localIp = debuggerHost?.split(':')[0];

// 3. Set up the dynamic base URL
let baseURL = 'http://localhost:8080/api';


if (__DEV__) {
    if (localIp) {
        baseURL = `http://${localIp}:8080/api`;
    } else if (Platform.OS === 'android') {
        baseURL = 'http://10.0.2.2:8080/api';
    }
} else {
    baseURL = 'https://api.yourproductiondomain.com/api';
}

const api = axios.create({
    baseURL,
    timeout: 5000,
});

export default api;
