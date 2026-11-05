// ===================== SANTA ROUNDS: FIREBASE CONFIG =====================
// Step 4 of the setup guide: replace `null` below with the config object
// Firebase shows you (the part from { to }), then commit the file.
// While this is null, the site runs in demo mode (data stays on one device).
//
// It's safe for this to be public: Firebase web keys aren't secrets.
// Your data is protected by the rules in firestore.rules.

window.SANTA_FIREBASE_CONFIG = {
  apiKey: "AIzaSyA_0PyzhDFI9-ISBeihtRFjdK4TPtopCgo",
  authDomain: "secret-santa-1237b.firebaseapp.com",
  projectId: "secret-santa-1237b",
  storageBucket: "secret-santa-1237b.firebasestorage.app",
  messagingSenderId: "279183506796",
  appId: "1:279183506796:web:4bab510d2c888b1e214749"
};

/* When you're done it should look like this:

window.SANTA_FIREBASE_CONFIG = {
  apiKey: "AIzaSy...",
  authDomain: "santa-rounds-1234.firebaseapp.com",
  projectId: "santa-rounds-1234",
  storageBucket: "santa-rounds-1234.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};

*/
