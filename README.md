# 🍔 Food Delivery App 

A complete React Native (CLI) application for food ordering — featuring authentication, restaurant browsing, cart management, favorites, payments, and profile management.
Built with TypeScript, Redux Toolkit, Firebase, Firestore, Reactotron, and Stripe SDK.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# 📌 Features
### 🔐 Authentication

Email & password sign-up / login

Firebase Authentication

Google Sign-In support

Secure token persistence using AsyncStorage

### 🏪 User Flow

Splash screen

Onboarding

Select restaurants

View meals & details

Add/remove items from cart

Favorite items

Search restaurants / meals

Checkout using Stripe SDK

Access user location for delivery address

### 👤 User Profile

Edit personal info

Update avatar

Logout

### 🛠 Architecture & Tools

React Native CLI

TypeScript

Redux Toolkit (RTK) + Async Thunks

AsyncStorage for persistence

Firestore as backend database

Reactotron for debugging

Clean folder structure with separation of concerns

# 📁 Project Structure
```sh
FOOD_DELIVERY_APP
│
├── android/                 # Native Android project
├── ios/                     # Native iOS project
├── assets/                  # Images, fonts, icons
│
├── src/
│   ├── components/          # Reusable UI components
│   ├── constants/           # Colors, fonts, API keys
│   ├── hooks/               # Custom hooks
│   ├── navigation/          # Stack & Tab navigation
│   ├── screens/             # All app screens (UI + logic)
│   ├── services/            # Firebase, Stripe, API utilities
│   ├── store/               # Redux Toolkit slices & store
│   ├── types/               # Global TS types
│   └── utils/               # Helpers, formatters, validators
│
├── App.tsx                  # App entry point
├── firebaseConfig.js        # Firebase initialization
├── ReactotronConfig.js      # Reactotron setup
├── tsconfig.json            # TypeScript config
├── babel.config.js          # Babel transformer
└── package.json
```

# 🏛 Architecture Overview (High-Level)
                ┌──────────────────────────────┐
                │          Presentation         │
                │ (Screens, Components, Hooks)  │
                └───────────────┬──────────────┘
                                │
                                ▼
                ┌──────────────────────────────┐
                │       Navigation Layer        │
                │ (Auth Stack, App Stack, Tabs) │
                └───────────────┬──────────────┘
                                │
                                ▼
                ┌──────────────────────────────┐
                │     State Management (RTK)    │
                │   Slices: Auth, Cart, User    │
                └───────────────┬──────────────┘
                                │
                                ▼
        ┌───────────────────────────────────────────────────┐
        │               Services / Data Layer               │
        │  - Firestore (restaurants, items, users, cart)    │
        │  - Firebase Auth (email, Google)                  │
        │  - Stripe SDK (payments)                          │
        │  - Location API                                   │
        └───────────────────────────────────────────────────┘


# 🧭 App Flowchart (Summary)
                        ┌──────────┐
                        │  Splash  │
                        └─────┬────┘
                              ▼
                    ┌──────────────┐
                    │ Onboarding?  │
                    └─────┬────────┘
                         Yes│No
                             ▼
                      ┌─────────────┐
                      │  Auth Flow  │
                      │ Login/Signup│
                      └─────┬───────┘
                            ▼
                      ┌─────────────┐
                      │  Home Tabs  │
                      │ Restaurants │
                      └─────┬───────┘
                            ▼
                ┌────────────────────────┐
                │ Restaurants → Meals    │
                │ Meals → Cart → Checkout│
                │ Checkout → Stripe      │
                └────────────────────────┘


# Getting Started

> **Note**:Before you begin, ensure your development environment is correctly configured:
https://reactnative.dev/docs/set-up-your-environment

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

You've successfully run and modified your React Native App. :partying_face:

# 🧪 Development Tools
### 🔍 Reactotron Setup

Reactotron is enabled for debugging app state, network requests, and async storage.

Configuration file:
```sh
ReactotronConfig.js
```
### 🔧 Environment Variables (Firebase Setup)

Add your Firebase keys in:
```sh
firebaseConfig.js
```
Make sure to configure:

Firestore

Firebase Authentication

Google Sign-In (iOS + Android)

### 💳 Payments (Stripe)

The app uses Stripe SDK for checkout flow.

Follow Stripe setup docs:
https://stripe.com/docs/payments/accept-a-payment?platform=react-native


### 📡 Backend (Firestore)

Firestore stores collections for:

Users

Restaurants

Menu items

Cart

Favorites

Orders

### 🧭 App Navigation

Built using:

React Navigation Stack

Bottom Tabs

Auth flow + Main App flow separation

### 🧵 State Management

Using Redux Toolkit:

Slices for Auth, Cart, Restaurants, Favorites, User Profile

Async thunks for Firestore operations

Persisting data via RTK + AsyncStorage



# 🛠 Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.


# 📚 Learn More

React Native Docs — https://reactnative.dev

Redux Toolkit — https://redux-toolkit.js.org

Firestore — https://firebase.google.com/docs/firestore

Stripe React Native — https://github.com/stripe/stripe-react-native

# 🎉 Conclusion

This project implements a complete, scalable, production-ready Food Delivery App using modern React Native architecture with TypeScript, Firebase, Stripe, and Redux Toolkit.


# Author
## Abdelrahman Aziz
### LinkedIn: https://www.linkedin.com/in/abdelrahman-aziz-7473b437b/