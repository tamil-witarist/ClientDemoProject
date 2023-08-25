import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const TokenCheck = ({Component}) => {
  const token = localStorage.getItem("token");
const navigate=useNavigate();
  useEffect(() => {
    console.log(token,window.location.pathname);

    if (!token && window.location.pathname!=="/" ) {
        navigate("/");
        return;
    }else{
        navigate("/dashboard");
        return;
    }
  }, []);

  return <Component/>;
};
export default TokenCheck;
