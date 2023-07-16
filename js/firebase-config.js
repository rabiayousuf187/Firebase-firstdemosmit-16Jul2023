
// <!-- FIrebase Configuration -->
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDt4D4mjYUoVfOp-h9-u3RyhSGn8cev45c",
      authDomain: "firstdemosmit-2023.firebaseapp.com",
      projectId: "firstdemosmit-2023",
      storageBucket: "firstdemosmit-2023.appspot.com",
      messagingSenderId: "762847069372",
      appId: "1:762847069372:web:dc411b6a909afc8bf5fcb9",
      measurementId: "G-Y2SFVWW83W"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);