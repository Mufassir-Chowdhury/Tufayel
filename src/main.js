import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { ref, onUnmounted } from 'vue';
import firebase from "firebase/app";
import "firebase/firestore";
require("typeface-raleway");

const firebaseConfig = {
    apiKey: "AIzaSyDvgCunpMBNt_TBH7ozpxqjNc1Dkp4Lm2Q",
    authDomain: "tufayel-blog.firebaseapp.com",
    projectId: "tufayel-blog",
    storageBucket: "tufayel-blog.appspot.com",
    messagingSenderId: "317109843356",
    appId: "1:317109843356:web:89c8089c8568e74899c459",
    measurementId: "G-B3JCE85SQ2"
  };
  firebase.initializeApp(firebaseConfig);


createApp(App).use(router).mount('#app')

const db = firebase.firestore()
const blogsCollection = db.collection('blogs')

export const loadBlogs = () => {
    const blogs = ref([])
    const close = blogsCollection.onSnapshot(snapshot => {
      blogs.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return blogs
}
