import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddPost from "../features/post/AddPost"
import Post from "../pages/Post";
import Mypage from "../pages/Mypage";



const Router = () => {


    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="addpost" element ={<AddPost/>}/>
            <Route path="post/:id" element= {<Post/>}/>
            <Route path="mypage" element= {<Mypage/>}/>
        </Routes>
    </BrowserRouter>
    );
};

export default Router;