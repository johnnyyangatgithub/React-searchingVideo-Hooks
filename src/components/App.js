import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VedioDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

//Important!!! there is no idea of 'this' inside of a hooks func.
const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    //Use custom hook
    const [videos, search] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={search} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VedioDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default App;