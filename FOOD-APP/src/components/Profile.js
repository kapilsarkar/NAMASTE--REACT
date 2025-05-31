import { useEffect, useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState("");
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const data = await fetch("https://api.github.com/users/kapilsarkar");
    const json = await data.json();
    console.log(json)
    setProfileData(json);
  };
  return (
    <div className="bg-amber-200 shadow-2xl rounded-2xl text-center text-purple-700 text-xl mt-10 font-bold p-3">
      <h2>Profile-Name:{profileData.name}</h2>
      <img
        className="shadow-2xl w-[50%] rounded-[50%] mx-auto"
        src={profileData.avatar_url}
      />
      <p>Profile:{profileData.bio}</p>
    </div>
  );
};

export default Profile;
