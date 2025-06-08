import Button from "./Button";

const ButtonsList = ()=>{
    return (
        <div className=" flex flex-wrap justify-center">
           <Button name="All"/>
           <Button name="Gaming"/>
           <Button name="Songs"/>
           <Button name="Live"/>
           <Button name="Cricket"/>
           <Button name="Soccer"/>
           <Button name="News"/>
        </div>
    )
}

export default ButtonsList;