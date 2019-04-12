import firebase from 'firebase/app';
import 'firebase/database';

import { FIREBASE_CONFIG } from './constants';

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);

// Get a reference to the database service
const database = firebase.database();

export default database;
