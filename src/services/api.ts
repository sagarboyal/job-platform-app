import axios from 'axios';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

// 1. Get the Metro packager IP address from Expo
const debuggerHost = Constants.expoConfig?.hostUri;

// 2. Extract just the IP part (e.g., "192.168.0.105" from "192.168.0.105:8081")
const localIp = debuggerHost?.split(':')[0];

// 3. Set up the dynamic base host
let baseHost = 'http://localhost:8080';

if (__DEV__) {
    if (localIp) {
        baseHost = `http://${localIp}:8080`;
    } else if (Platform.OS === 'android') {
        baseHost = 'http://10.0.2.2:8080';
    }
} else {
    baseHost = 'https://api.yourproductiondomain.com';
}

export const REST_URL = `${baseHost}/api`;
export const GRAPHQL_URL = `${baseHost}/graphql`;

const api = axios.create({
    baseURL: REST_URL,
    timeout: 5000,
});

export default api;
