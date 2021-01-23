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
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/*<Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <User render={(isLoggedIn) => (isLoggedIn ? "Sagar" : "Guest")} />
      <HoverCounter />
      <ClickCounter />
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <FRParentInput />
       <FocusInput />
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
