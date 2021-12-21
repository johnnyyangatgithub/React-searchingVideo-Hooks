import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        //可以写成onClick={onVideoSelect}，但是我们要每次点击的时候都传入参数，所以要写成箭头函数
        <div onClick={() => { onVideoSelect(video) }} className='video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className='content '>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;