import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddPost from "../features/post/AddPost"
import Post from "../pages/Post";
import Mypage from "../pages/Mypage";
import  TILpage from "../pages/TILpage";
import WILpage from "../pages/WILpage"



const Router = () => {


    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="addpost" element ={<AddPost/>}/>
            <Route path="post/:id" element= {<Post/>}/>
            <Route path="/mypage" element= {<Mypage/>}/>
            <Route path="/mypage/TIL" element= {<TILpage/>}/>
            <Route path="/mypage/WIL" element= {<WILpage/>}/>
        </Routes>
    </BrowserRouter>
    );
};

export default Router;