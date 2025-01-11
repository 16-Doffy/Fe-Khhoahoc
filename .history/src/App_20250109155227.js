import v1 from "./assets/img/v1.jpg";
import d2 from "./assets/img/d2.jpg";
import "./App.css"
import PropTypes from "prop-types";
const App = () => {
  return (
    <div>
      <YoutubeItem image={v1} avatar={d2} name="DOffy" title="love u" />
    </div>
  );
};

export default App;

function YoutubeItem(props) {
  return (
   
    <div className="youtube-list"> 
      <div className="youtube-item">
        <div className="youtube-image">
          <img src={props.image} alt="youtube-image1"  />
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="img" className="youtube-avatar" />
          <div className="youtube-content">
            <h3 className="youtube-title">{props.title || "this is exam"}</h3>
            <h4 className="youtube-auth">{props.name || "this is exam"}</h4>
          </div>
        </div>
      </div>

      <div className="youtube-item">
        <div className="youtube-image">
          <img src={props.image} alt="youtube-image1"  />
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="img" className="youtube-avatar" />
          <div className="youtube-content">
            <h3 className="youtube-title">{props.title || "this is exam"}</h3>
            <h4 className="youtube-auth">{props.name || "this is exam"}</h4>
          </div>
        </div>
      </div>

      <div className="youtube-item">
        <div className="youtube-image">
          <img src={props.image} alt="youtube-image1"  />
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="img" className="youtube-avatar" />
          <div className="youtube-content">
            <h3 className="youtube-title">{props.title || "this is exam"}</h3>
            <h4 className="youtube-auth">{props.name || "this is exam"}</h4>
          </div>
        </div>
      </div>
      </div>
  
  );
}
YoutubeItem.propTypes = {
  image: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
