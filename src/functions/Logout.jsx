import { useContext } from "react";
import LoginContext from "../context/LoginContext";


export default function Logout(){
    const context = useContext(LoginContext);
    context.setIsLogged(false);
    context.setUserId(null);
}