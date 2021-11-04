const Switch = (props) => {
  const handleClick1 = () => {
    props.setSwitch(true);
  };
  const handleClick2 = () => {
    props.setSwitch(false);
  };

  return (
    <div className="row1">
      <button
        className={props.switch ? "selected" : "unselected"}
        onClick={handleClick1}
      >
        ON
      </button>
      
      <button
        className={props.switch ? "unselected" : "selected"}
        onClick={handleClick2}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
