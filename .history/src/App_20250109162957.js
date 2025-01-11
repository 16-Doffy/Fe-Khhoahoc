import "./App.css";
import YoutubeItem from "./components/youtube/YoutubeItem";

import { YoutubeData } from "./youtubeData";

const App = () => {
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

export default App;


