import Increments from "./components/Increments";
import EventBinding from "./components/EventBinding";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";

function App() {
  return (
    <div className="App">
      <LifecycleA />
      {/*<Form />
      <NameList />

      <UserGreeting />
    <ParentComponent />
       <Increments />
      <EventBinding /> */}
    </div>
  );
}

export default App;
