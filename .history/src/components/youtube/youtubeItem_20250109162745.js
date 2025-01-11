import React from 'react';

const youtubeItem = (props) => {
    return (
        <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="youtube-image" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="avatar" className="youtube-avatar" />
        <div className="youtube-content">
          <h3 className="youtube-title">{props.title || "This is a title"}</h3>
          <h4 className="youtube-auth">{props.name || "This is an author"}</h4>
        </div>
      </div>
    </div>
    );
};

export default youtubeItem;