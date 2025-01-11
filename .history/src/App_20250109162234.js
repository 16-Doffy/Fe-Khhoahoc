import "./App.css";
import { YoutubeData } from "./youtubeData";

const App = () => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          name={item.name}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default App;

function YoutubeItem(props) {
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
}
