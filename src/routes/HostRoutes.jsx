import { Navigate } from "react-router-dom";

import Loader from "../components/Shared/Loader";
import useRole from "../hooks/UseRole";



const HostRoutes = ({children}) => {
   const [role, loading] = useRole()
    console.log(role);
    console.log(loading);
    if(loading){
        return <Loader></Loader>
    }
    if(role === 'host'){
       return children;
    }
    return <Navigate to="/dashboard" ></Navigate>
};

export default HostRoutes;