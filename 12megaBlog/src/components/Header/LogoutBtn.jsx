import React from "react";
import { Button } from "../index";
import authservice from "../../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { logout } from "../../store/authSlice";
function LogOutBtn() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.auth.activeStatus);
  const logOutBtn = async () => {
    
      const deleteSession = authservice.logOut();
      console.log("logout successfully",logout)
      dispatch(logout())
      if (deleteSession) navigate("/");
      
      
  };
  return <Button children={"Log Out"} onClick={logOutBtn} />;
}

export default LogOutBtn;
