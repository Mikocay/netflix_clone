import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAOkV6qxUDRz58gn9yWDQA1WnI3479X6cw',
  authDomain: 'react-netflix-clone-3f87e.firebaseapp.com',
  projectId: 'react-netflix-clone-3f87e',
  storageBucket: 'react-netflix-clone-3f87e.appspot.com',
  messagingSenderId: '532623977376',
  appId: '1:532623977376:web:445d5d1970d094d2a592c5',
  measurementId: 'G-7ERKTQ8GTC',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
