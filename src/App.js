import "./App.css";
import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  console.log(switch1);
  return (
    <div className="App">
      <Header />
      <Content
        switch1={switch1}
        switch2={switch2}
        switch3={switch3}
        setSwitch1={setSwitch1}
        setSwitch2={setSwitch2}
        setSwitch3={setSwitch3}
      />
      <Footer />
    </div>
  );
};

export default App;
