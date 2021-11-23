import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyA0zHO3SEcZ9iyojrcuMyZF-pJlCxuUohM',
  authDomain: 'hackathon-withberen-qh.firebaseapp.com',
  projectId: 'hackathon-withberen-qh',
  storageBucket: 'hackathon-withberen-qh.appspot.com',
  messagingSenderId: '501896178057',
  appId: '1:501896178057:web:c4d4484a2dcf93b47d5958',
  measurementId: 'G-MEWLQH8YQ3',
});

export const auth = getAuth(firebaseConfig);
