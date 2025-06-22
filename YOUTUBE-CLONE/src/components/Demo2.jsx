import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  /** not like => ref = 0
   * ref = { current: 0 }
   *
   *
   * */
  console.log("Rendering");
  const i = useRef(null);
  useEffect(() => {
    if (i.current) return;
    i.current = setInterval(() => {
      //console.log("Namaste React", Math.random());
    }, 1000);
  }, []);
  return (
    <>
      <div className=" m-5 p-5 w-96 h-96 bg-slate-50 border border-black">
        Demo2
        <div>
          <button
            className=" bg-green-500 text-white px-2 m-1"
            onClick={() => {
              x = x + 1;
              console.log("x=", x);
            }}
          >
            Increase-X
          </button>
          <span className=" font-bold text-xl">Let = {x}</span>
        </div>
        <div>
          <button
            className=" bg-green-500 text-white px-2 m-1"
            onClick={() => {
              setY(y + 1);
            }}
          >
            Increase-Y
          </button>
          <span className=" font-bold text-xl">State = {y}</span>
        </div>
        <div>
          <button
            className=" bg-green-500 text-white px-2 m-1"
            onClick={() => {
              ref.current = ref.current + 1;
              console.log("ref=", ref.current);
            }}
          >
            Increase-Ref
          </button>
          <span className=" font-bold text-xl">Ref = {ref.current}</span>
        </div>
        <button
          className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
          onClick={() => {
            clearInterval(i.current);
          }}
        >
          Stop Printing
        </button>
      </div>
    </>
  );
};

export default Demo2;
