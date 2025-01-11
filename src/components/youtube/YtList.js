import React from 'react';
import YoutubeItem from './YtItem';
import { YoutubeData } from '../../youtubeData';

const YtList = () => {
    return (
        <div className="youtube-list">
      {YoutubeData.map((item) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar || item.image}
          name={item.name}
          title={item.title}
        />
      ))}
    </div>
    );
};

export default YtList;