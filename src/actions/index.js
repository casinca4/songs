// Action creator

export const selectSong = song => {
	// Return an action
	return {
		type: "SONG_SELECTED",
		payload: song
	};
};


// song als argument:  pass in the song that we're trying to select as an argument to the actual creator