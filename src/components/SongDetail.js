import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
	// console.log(props);
	if (!song) {
		// if song does not yet exist or if it's a null value, then...
		return <div>Select a song</div>;
	}

	return (
		<div>
			<h3>Details for:</h3>
			<p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
        </p>
		</div>
	);
};

const mapStateToProps = state => {
	return { song: state.selectedSong }; // selectedSong kommt von combine in reducer
};

export default connect(mapStateToProps)(SongDetail);

// props bezieht sich auf { song: state.selectedSong }  in mapStateToProps

// song in mapStateToProps kann man umbenennen, if we want to customize the key that shows up inside the props object

// const SongDetail = props --> destructuring: ({ song })
