import { useEffect } from "react";

const Profile = ()=>{

  useEffect(()=>{
       fetchProfile();
  },[])
  const fetchProfile = async()=>{
      const data = await fetch("https://api.github.com/users/kapilsarkar");
      const json = await  data.json();
      console.log(json);
  }
    return (
        <div className="">
          <h2>Kapil Sarkar</h2>
          fasfas
        </div>
    )
}

export default Profile;