import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';
import VideoList from "./Components/video_list";
import {MyNavbar} from "./Components/navbar";
import YTSearch from 'youtube-api-search';
import VideoDetail from "./Components/video_details";
const API_KEY = "AIzaSyD_E9jPSDOn2UuOv0xMiLhHLS1amDcC_ZU";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            SelectedVideo:null //this.state.videos[0]
        };



    }
    videoSearch(term){
        YTSearch({key:API_KEY,term:term },(videos)=>{
            console.log(videos);
            this.setState({videos:videos,selectedVideo:videos[0]});
        });
    }

   /* videoSelect(term){
        YTSearch({key:API_KEY,term:term },(videos)=>{

            this.setState({videos:videos,selectedVideo:videos[0]});
        });
    }
*/
    render(){
        return(
            <div className="container">
                <div className="row">
                    <MyNavbar/>
                </div>
                <div className="row">
                    <SearchBar onSearchTermChange={this.videoSearch.bind(this)}/>
                </div>
                <div className="row">
                    <div className="col-md-8 col-sm-10">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-md-4 col-sm-2">
                        <VideoList videos={this.state.videos}
                            onVideoSelect={(video)=>{
                                this.setState({selectedVideo:video})
                            }}/>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App/> , document.querySelector(".container"));
