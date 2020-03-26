import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions"; // action creator; pass to connect function; named export in actions

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
		// this.props === { songs: state.songs } --> array of all the songs
		// console.log(this.props);
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	// console.log(state);
	return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);

// mapStateToProps: convention; kann irgendwie heißen; argument ist immer state

// state: contains entire list of songs from the Song list reducer and the current selected song from the selected song reducer --> all of the data inside of the Redux store (accounts, policies and claims history properties)

// connect { selectSong } ist eigentlich { selectSong: selectSong }
// will be passed into the component as a prop

// Z. 11 onClick: song --> the current song that we are iterating over
