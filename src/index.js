// React: javascript library editing html
// JSX: extension of javascript language writing html like syntax
// ES6: next generation of javascript
// Babel: compiler transcompile JSX into compatible javascript language

import _ from 'lodash'
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search"
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyC0kCqX_ME_3226Q8DA0yWx4Ktymw2-qDM';

// create a component producing html
// this creates a class
class App extends Component {
    constructor(props) {
        super(props);
        // whenever a state changes, the child will be re-rendered
        this.state = {videos: [], selectedVideo: null};
        this.videoSearch('cnn')
    }

    // function to search a video
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // update the state and re-render
            this.setState({ videos: videos, selectedVideo: videos[0] });
        });
    }

    render() {
        const videoSearch = _.debounce( (term) => this.videoSearch(term), 1000 );
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}  // pass in a function
                    videos={this.state.videos} />
            </div>
        );
    }
}

// put the component on the page
ReactDOM.render(<App></App>, document.querySelector('.container'));
