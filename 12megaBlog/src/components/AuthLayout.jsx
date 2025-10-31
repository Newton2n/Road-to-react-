import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Protected({ children ,authentication =true,slug}) {
  const authStatus = useSelector((state) => state.auth.activeStatus);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  console.log(authStatus);

  useEffect(() => {
    if(authentication ===false){
     navigate(slug)
    }else if(authentication===true &&authStatus===false){
      navigate("/login")
    }else if(authentication ===true && authStatus ===true){
      navigate(slug)
    }
    setLoading(false);
  }, []);

  return loading ? <div>Loading Data</div> : <>{children}</>;
}

export default Protected;
