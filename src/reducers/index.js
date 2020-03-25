import { combineReducers } from 'redux';	// named export

const songsReducer = () => {
	return [
		{ title: "No Scrubs", duration: "4:05" },
		{ title: "Macarena", duration: "2.30" },
		{ title: "All Star", duration: "3:15" },
		{ title: "I want it that way", duration: "1.45" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECTED_SONG') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});

// Z. 1: kein argument, da static array;  we don't need to look at any actions because we never expect to change it in any way, shape or form

// songsReducer: static list of songs

/*
 - momentan nur eine action
 - if statement as we assume that we might have other actions at some point in the future
 - technically for our current app we don't really need this if statement because we're only ever going to see actions of type songs selected. (denn wir werden immer nur Aktionen vom Typ Lieder ausgewählt sehen)
 - however to make sure that if we ever expand our application in the future with additional actions and additional types we're not going to ruin our code here and break our selected song reducer.
*/