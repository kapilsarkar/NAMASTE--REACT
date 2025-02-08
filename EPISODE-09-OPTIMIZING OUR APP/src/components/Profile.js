import { useEffect, useState } from "react";

const Profile = ()=>{
 const [profileData,setProfileData] = useState("");
  useEffect(()=>{
       fetchProfile();
  },[])
  const fetchProfile = async()=>{
      const data = await fetch("https://api.github.com/users/kapilsarkar");
      const json = await  data.json();
      console.log(json);
      setProfileData(json)
  }
    return (
        <div className="">
          <h2>{profileData.name}</h2>
          <img src={profileData.avatar_url}/>
          <p>{profileData.bio}</p>
        </div>
    )
}

export default Profile;