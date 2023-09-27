# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## `test cases`

#### `search test`

Searching for song returns and displays same top twenty results as the spotify app.

#### `Track List`

Displays all the songs from the search. Clears all the songs when new search is sent and refills the list. Button adds song to playlist component

#### `PlayList`

Populates with items form track list. Removes song when button is click, if two of the same song exist in the playlist removes both song. To fix replace track ID for list key for made unique key as list key.

Create playlist on spotify app when playlist submitted. Creates multiple playlist of the same name; fix by checking if playlist already exist. should give user option to change name add to playlist. if add should display track already on playlist. 