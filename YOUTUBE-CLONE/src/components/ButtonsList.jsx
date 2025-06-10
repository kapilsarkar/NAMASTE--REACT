import Button from "./Button";

const ButtonsList = () => {
  return (
    <div className=" w-full flex flex-wrap sm:justify-center">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="News" />
      <Button name="Comedy" />
      <Button name="Tech" />
      <Button name="Cooking" />
    </div>
  );
};

export default ButtonsList;
