Github User Saver
============================

> Directory Structure

### A typical top-level directory layout

    ├── public              # All public facing files
    ├── src                 # Test files (alternatively `spec` or `tests`)
    │   ├── apis            # Contains api calls to Firebase and Github
    │   ├── components      # Presentational/Dummy components stored here
    │   └── containers      # App.js container component for communication between view to Redux model
    │   └── modules         # Contains Redux store, actions, and reducers

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

