import {useNavigate} from 'react-router-dom';

const Error=()=>{
    const navigate=useNavigate();
    
    return(
        <div>
            <img src="" alt=""/>
            <button onClick={()=>navigate('/')}>Click To Login</button>
        </div>
    )
}
export default Error;