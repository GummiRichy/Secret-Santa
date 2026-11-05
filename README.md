# Santa Rounds

Secret Santa for med school friend groups. Each group gets its own room with a cartoon mascot, wishlists written as prescriptions, a sealed random draw, anonymous Elf Mail with hints, a guessing game, and a big reveal on gift day.

Everything here is free: Firebase's free Spark plan (no credit card) stores the data, and GitHub Pages hosts the site.

Setup takes about 15 minutes, once. After that you just share a link.

---

## Step 1. Create a free Firebase project

1. Go to **https://console.firebase.google.com** and sign in with any Google account.
2. Click **Create a project**. Name it something like `santa-rounds`.
3. When it asks about Google Analytics, turn it **off** (you don't need it). Click **Create project**.

## Step 2. Turn on anonymous sign-in

The app quietly signs each phone in anonymously, so your friends never make an account.

1. In the left menu: **Build → Authentication → Get started**.
2. Open the **Sign-in method** tab, click **Anonymous**, flip it to **Enable**, and **Save**.

## Step 3. Create the database and paste the rules

1. Left menu: **Build → Firestore Database → Create database**.
2. Pick a location close to you (on the East Coast, `us-east1` or `nam5 (United States)` works). Choose **Start in production mode**, then **Create**.
3. Open the **Rules** tab. Delete what's there, paste the whole contents of `firestore.rules` from this folder, and click **Publish**.

The rules stop working on March 1, 2027, which locks the database after the season. To play again next year, change that date in the Rules tab and publish.

## Step 4. Get your web config

1. Click the gear icon next to **Project Overview → Project settings**.
2. Scroll to **Your apps** and click the web icon **`</>`**.
3. Nickname it `santa-rounds`. Leave "Firebase Hosting" unchecked. Click **Register app**.
4. Firebase shows a block of code with `const firebaseConfig = { ... };`. Copy the part from `{` to `}`.
5. Open `config.js` in this folder and replace `null` with what you copied:

```js
window.SANTA_FIREBASE_CONFIG = {
  apiKey: "AIzaSy...",
  authDomain: "santa-rounds-1234.firebaseapp.com",
  projectId: "santa-rounds-1234",
  storageBucket: "santa-rounds-1234.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};
```

It's fine for this to be public, because Firebase web keys aren't passwords. The rules from Step 3 protect the data.

## Step 5. Put it online with GitHub Pages

1. Make a free account at **https://github.com** if you don't have one.
2. Click **+ → New repository**. Name it `santa-rounds`, set it to **Public**, and click **Create repository**.
3. On the new repo page, click **uploading an existing file**. Drag in **everything in this folder**, including the `icons` folder. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** and **/ (root)**, then **Save**.
5. Wait about a minute and refresh. GitHub shows your link: `https://YOUR-USERNAME.github.io/santa-rounds/`

If you uploaded before editing `config.js`, open `config.js` on GitHub, click the pencil icon, paste your config, and commit.

## Step 6. Play

1. Open your link and tap **Start a room**. Make one room per friend group.
2. In the room, tap **Copy invite link** and drop it in each group chat.
3. Friends open it, make their elf, and fill out their Rx (wishlist).
4. Tell everyone to save their **Sleigh Key** (it pops up when they join). It's how they get back in on a new phone.
5. Add **No-match pairs** for couples or roommates, then **Shake the sack**.
6. When your group picks a date, set it under **Room details** and the countdown starts.
7. On gift day, tap **Start the big reveal**.

**Putting it on a phone's home screen:** on iPhone, open the link in Safari, tap Share, then **Add to Home Screen**. On Android, Chrome offers **Install app**. It then opens full-screen with its own icon, like a real app.

---

## How the secrecy works (since you're playing too)

- The draw runs on the host's phone. Each match gets locked so only that Santa's phone can open it. The host's screen never shows anyone's match except their own.
- Matches, Elf Mail, and hints are encrypted before they're saved. If you open the Firebase console, you'll see scrambled text, not who has who.
- Each person's unlock key stays on their phone. The copy saved to Firebase is locked with their Sleigh Key, so nobody else can use it.
- Everyone can read every wishlist, so checking your giftee's list doesn't give you away.
- On reveal day, each Santa's phone unmasks them when they open the app.

## Costs

Firebase's free plan covers 50,000 reads and 20,000 writes per day. A few groups of 5 to 10 people use a tiny fraction of that. GitHub Pages is free for public repos. Nothing here needs a credit card.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app |
| `config.js` | Your Firebase config (Step 4) |
| `firestore.rules` | Database rules (Step 3) |
| `manifest.webmanifest`, `sw.js`, `icons/` | Make it installable on phones |
