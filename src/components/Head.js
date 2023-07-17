import React from "react"
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className="grid grid-flow-col p-3 m-2 shadow-lg">
            <div className="flex col-span-1 ">
                <img 
                onClick={()=> toggleMenuHandler()} 
                className="h-10 cursor-pointer" alt="menu" 
                src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"/>
                <a href="/">
                <img 
                className=" h-12 mx-2 " 
                alt="youtube-logo" 
                src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"/>
                </a>
                
            </div>
            <div className="col-span-10 px-10">
                <input 
                className="w-1/2 border border-gray-400 p-2 rounded-l-full"
                type="text"/>
                <button 
                className=" border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 ">Search</button>
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="user" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>
            </div>
        </div>
    )
};

export default Head;