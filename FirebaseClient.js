const firebase = require('firebase')
import { API_KEY } from 'react-native-dotenv'

// Initialize Firebase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "dailydrip-firebase-storage.firebaseapp.com",
  databaseURL: "https://dailydrip-firebase-storage.firebaseio.com",
  storageBucket: "dailydrip-firebase-storage.appspot.com"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp
