import { Navigate } from "react-router-dom";

const isAunthenticated = () =>{
    const token = localStorage.getItem('token');
    if(!token) {
        Navigate("/");
        return false;
    } else {
        return true;
    }
}