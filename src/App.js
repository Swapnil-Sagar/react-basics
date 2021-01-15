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
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";

function App() {
  return (
    <div className="App">
      <FRParentInput />
      {/* <FocusInput />
      <RefsDemo />
      <ParentComp />
      <Table />
      <FragmentDemo />
       <LifecycleA />
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
