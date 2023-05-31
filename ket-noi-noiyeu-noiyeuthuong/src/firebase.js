// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Đây là file config cá nhân được khởi tạo dự trên firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWl8UcWkOJRviQdB7R7Cp7Imzi0Blq0k4",
  authDomain: "projeck123-bcf3f.firebaseapp.com",
  projectId: "projeck123-bcf3f",
  storageBucket: "projeck123-bcf3f.appspot.com",
  messagingSenderId: "1063156404370",
  appId: "1:1063156404370:web:4dcc9d225f414b3548164b",
  measurementId: "G-9F85D24FK2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
// Nhận tham chiếu đến dịch vụ lưu trữ, được sử dụng để tạo tham chiếu trong bộ chứa lưu trữ của bạn
export const storage = getStorage(app);
