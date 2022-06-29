const Counter = (props) => {
  // console.log(props);
  return (
    <div className="text-center bg-light container ">
      <h2 className="header-text fs-1 ">{props.title}</h2>
      <p className="fs-3">{props.number}</p>
    </div>
  );
};

export default Counter;
