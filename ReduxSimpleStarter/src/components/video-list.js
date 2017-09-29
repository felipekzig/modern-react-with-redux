import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = ({videos, onVideoSelect}) => {
  return (
    <ul className="col-md-5 list-group">
      {videos.map(video => <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />)}
    </ul>
  );
};

export default VideoList;
