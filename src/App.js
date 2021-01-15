import Increments from "./components/Increments";
import EventBinding from "./components/EventBinding";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Table />
      <FragmentDemo />
      {/* <LifecycleA />
      <Form />
      <NameList />

      <UserGreeting />
    <ParentComponent />
       <Increments />
      <EventBinding /> */}
    </div>
  );
}

export default App;
