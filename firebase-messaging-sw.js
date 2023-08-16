//importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');
//
//  /*Update with yours config*/
//  const firebaseConfig = {
//   apiKey: "AIzaSyDgRVi-Ldhx2U9eK70hL63cxGbGxIi7O0A",
//   authDomain: "g2lock.firebaseapp.com",
//   projectId: "g2lock",
//   storageBucket: "g2lock.appspot.com",
//   messagingSenderId: "285702318638",
//   appId: "1:285702318638:web:210d089f718c0e366f8dbf",
//   measurementId: "G-NWLYD5TELT"
//  };
//  firebase.initializeApp(firebaseConfig);
//  const messaging = firebase.messaging();
//
//  messaging.onBackgroundMessage(function(payload) {
//    console.log('Received background message ', payload);
//    const notificationTitle = payload.notification.title;
//    const notificationOptions = {
//      body: payload.notification.body,
//    };
//    self.registration.showNotification(notificationTitle,notificationOptions);
//  });