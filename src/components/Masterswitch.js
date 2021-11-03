const Masterswitch = (props) => {
  const handleClick = () => {
    props.setSwitch1(false);
    props.setSwitch2(false);
    props.setSwitch3(false);
  };

  return (
    <button className="master-switch" onClick={handleClick}>
      TURN ALL OFF
    </button>
  );
};

export default Masterswitch;
