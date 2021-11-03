import Switch from "./Switch";
import Result from "./Result";

const Content = (props) => {
  return (
    <section className="content">
      <div className="buttons">
        <Switch switch={props.switch1} setSwitch={props.setSwitch1} />
        <Switch switch={props.switch2} setSwitch={props.setSwitch2} />
        <Switch switch={props.switch3} setSwitch={props.setSwitch3} />
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
