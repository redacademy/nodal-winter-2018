# Nodal

React Native App designed to allow university students easy and effective ways of joining teams for competitions that they may be interested in.

![Alt Text](./nodal_demo.gif "app demo gif")  
## Setup

To view, make sure you are using Xcode (ios), Android SDK (android), and npm or yarn.

**Download repo then,**

 #### Setup firebase database.
 
 1.  ###### Firestore
 - [Get started with firestore](https://firebase.google.com/docs/firestore/quickstart)
 - import json to the database to get started with the db structure (we will email it to you)
 2. ###### Authentication
 - [Get started with firebase auth](https://firebase.google.com/docs/auth/web/start)
 3. Make a file named .env in the root of your project directory and add values for these environment variables
 
 ```
API_KEY=XXXXXXXXXXXXXXXXXXXXX
AUTH_DOMAIN=XXXXXXXX.firebaseapp.com
DATABASE_URL=https://XXXXXX.firebaseio.com
PROJECT_ID=XXXXXX
STORAGE_BUCKET=XXXXXXX.appspot.com
MESSAGING_SENDER_ID=XXXXXXXXXX
 ```
 

In root run:

```
  npm install
```

or

```
  yarn
```

For remote debugger:

```
  npm run debug
```

To Run on ios

```
  react-native run-ios --simulator "iPhone 6"
```

## Technology used:


- React native
- Redux
- Redux Thunk
- React Native Navigation
- Google Firebase FireStore database
- React Native Imagepicker
- React Native Read-more-text
- React Native Slider
- React Native dotenv
- React Native Immutability-helper


## Authors

**Development Team:**

* Ian Hitchcock
* Qingxin Yuan
* Nathan Moseley

## References

Starter for this project provided by Red Academy.

All designs supplied by Shirley Zhou, Jenifer Wong, Lochlan Graham, Julian Tomlin, Liv Meek

React Native Imagepicker provided by:

https://github.com/react-community/react-native-image-picker

## Branches

#### develop:

contains peer reviewed features

#### group-final

contains beta features that are a work in progress. (this is the danger zone (or the fun zone))

## TODO:

#### features
1. Team chat and user to user chat 
2. Search functionality and search screen for searching teams/users/competitions
3. Favourite functionality to favourite chats/competitions
4. Featured competition
5. We suggest building a partner web app with an admin facing side connected to the same database to add competitions
6. Payment linked to app


#### bug fixes
1. More robust frontend for matching (create team, navigation)
2. Ability to remove skills chips in edit profile screen
3. Ability to leave a team
4. Animation glitch in the matching sliders (We think this is an issue with react-native-slider package)
5. Refactor redux to cache more network requests.


