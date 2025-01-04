# React Native Unhandled Promise Rejection Bug

This repository demonstrates a common React Native bug where an unhandled promise rejection from a network request causes the app to crash. The solution shows how to gracefully handle such errors for a more robust application.

## Bug
The `bug.js` file contains a React Native component that fetches data from a remote API.  If the network request fails, the app crashes due to an unhandled promise rejection. This is a common issue when not properly handling asynchronous operations in React Native.

## Solution
The `bugSolution.js` file provides the corrected version of the component, implementing error handling using a `try...catch` block within the `useEffect` hook's asynchronous function. This handles potential network errors preventing the app crash and providing a more user-friendly experience.

## How to Reproduce the Bug
1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on your device or emulator.
4. Observe the crash if the network request fails (e.g., no internet connection).