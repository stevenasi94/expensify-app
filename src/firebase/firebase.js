import * as firebase from "firebase";

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PRIJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("value", (snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});

// 	console.log(expenses);
// });

// database.ref("expenses").push({
// 	description: "House",
// 	amount: 23456788989,
// 	createdAt: 124569897,
// 	note: ""
// })

// database.ref().on("value", (snapshot) => {
// 	const data = snapshot.val();
// 	console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, () => {
 
// })