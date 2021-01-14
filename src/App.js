import Increments from "./components/Increments";
import EventBinding from "./components/EventBinding";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/*<ParentComponent />
       <Increments />
      <EventBinding /> */}
    </div>
  );
}

export default App;
