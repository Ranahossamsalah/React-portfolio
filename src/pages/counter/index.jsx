import Counter from "../../component/counter/Counter";
import Decreament from  "../../component/counter/Decreament-counter";
import Increament from "../../component/counter/Increament-counter";
import { useState } from "react";
const Home = () => {
  const [number, setnumber] = useState(0);

  const increamentfunc = () => {
    setnumber(number + 1);
  };
  const decreamentfunc = () => {
    setnumber(number - 1);
  };
  return (
    <div className="my-5 border w-50 mx-auto p-5">
      <Counter title="counter"></Counter>
      <Counter number={number}></Counter>
      <div className="text-center  container ">
        <Decreament icon="+" decreamentfunc={decreamentfunc}></Decreament>
        <Increament icon="-" increamentfunc={increamentfunc}></Increament>
      </div>
    </div>
  );
};

export default Home;
