const Result = (props) => {
return(
      props.switch1 && props.switch2 && props.switch3 ?  <div className="ready-box"><p>Ready !</p></div>
        : <div className="no-way-box"><p>No Way !</p></div>
)
}

export default Result;
