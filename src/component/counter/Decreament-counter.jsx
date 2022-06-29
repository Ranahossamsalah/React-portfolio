const Deccreament = (props) => {
  // console.log(props);

  return (
    <button className="btn btn-warning  w-25 " onClick={props.decreamentfunc}>
      {props.icon}
    </button>
  );
};

export default Deccreament;
