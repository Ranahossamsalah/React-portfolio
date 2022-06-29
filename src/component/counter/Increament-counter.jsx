const Increament = (props) => {
  // console.log(props);

  return (
    <button
      className="btn btn-warning  w-25 ms-5  "
      onClick={props.increamentfunc}
    >
      {props.icon}
    </button>
  );
};

export default Increament;
