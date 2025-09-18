import { useContext } from "react";

import UserContext from "../Context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user || !user.username) return <h3> Please Login</h3>;
  return <h3>Name :{user.username}</h3>;
}

export default Profile;
