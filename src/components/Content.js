import Switch from "./Switch";
import Result from "./Result";
import Masterswitch from "./Masterswitch";

const Content = (props) => {
  return (
    <section className="content">
      <div className="buttons">
        <Switch switch={props.switch1} setSwitch={props.setSwitch1} />
        <Switch switch={props.switch2} setSwitch={props.setSwitch2} />
        <Switch switch={props.switch3} setSwitch={props.setSwitch3} />
        <Masterswitch
          switch1={props.switch1}
          setSwitch1={props.setSwitch1}
          switch2={props.switch3}
          setSwitch2={props.setSwitch3}
          switch3={props.switch2}
          setSwitch3={props.setSwitch2}
        />
      </div>
      <div className="results">
        <Result
          switch1={props.switch1}
          switch2={props.switch2}
          switch3={props.switch3}
        />
      </div>
    </section>
  );
};

export default Content;
