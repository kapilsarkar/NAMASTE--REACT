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
        <div className="profile-container">
          <h2>Profile-Name:{profileData.name}</h2>
          <img className="profile-img" src={profileData.avatar_url}/>
          <p>Profile:{profileData.bio}</p>
        </div>
    )
}

export default Profile;