import "./App.css";
import Button from "./components/button/button";
// import YtList from "./components/youtube/YtList";
const App = () => {
  return (
<div> 
{/* <YtList></YtList> */}
<Button>Primary</Button>
<Button className="button--secondary">Secondary</Button>
</div>
  );
};

export default App;


