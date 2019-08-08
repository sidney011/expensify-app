import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
 






// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//  console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('notes/-LlcKDT1fB1pTokPYsRD').remove()

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //       const expenses = [];

// //       snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //           id: childSnapshot.key,
// //           ...childSnapshot.val()
// //         });
// //       });
// //       console.log(expenses);
// //   });

// database.ref('expenses').on('value', (snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });
//         console.log(expenses);
// });

// // database.ref('expenses').push({
// //   description: 'rent',
// //   note: 'increase',
// //   amount: 345,
// //   createdAt: 1000
// // });



// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// // }, (e) => {
// //   console.log('Error with data fetching', e);
// // });


// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   })

// // database.ref().set({
// //     name: 'Sidney Wimart',
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //       title: "Software Developer",
// //       company: "Google"
// //     },
// //     location: {
// //       city: 'Philadelphia',
// //       country: 'United States'
// //     }
// // }).then(() => {
// //   console.log('Data is saved!')
// // }).catch((e) => {
// //   console.log('This failed: ', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });


