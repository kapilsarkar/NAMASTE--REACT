const Button = ({ name }) => {
  return (
    <div>
      <button className=" dark:bg-gray-900 text-black dark:text-white px-3 ms:px-5 py-2 rounded-lg  m-2 bg-gray-200 ">
        {name}
      </button>
    </div>
  );
};
export default Button;
