import v1 from "./assets/img/v1.jpg";
import d2 from "./assets/img/d2.jpg";
import "./App.css"
import PropTypes from "prop-types";
import { YoutubeData } from "./youtubeData";

const App = () => {
  const number = [1,2,3,4,5];
  const double = number.map((item) => item * 2);
  return (

    <div className="youtube-list"> 
    {YoutubeData.map((item, index)=> (
      <YoutubeItem key={item.id} image={item.img}>

      </YoutubeItem>
    ))}
    </div>
    // <div>
    //   <YoutubeItem image={v1}
    //    avatar={d2} 
    //    name="DOffy" 
    //    title="love u" />
    // </div>
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

